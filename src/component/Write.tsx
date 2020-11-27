import React, { useState, useEffect, createRef } from 'react';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import { db, dbs } from '../config'
import firebase from 'firebase';
import { Editor } from "@toast-ui/react-editor";
import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";

const useStyles = makeStyles((theme) => ({
    title: {

    },
    content: {
        marginTop: theme.spacing(3),
        height: '300px'
    }
}))
const Write = (props:any) => {

    const uuidv4 = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }               //https://stackoverflow.com/questions/105034/how-to-create-guid-uuid 고유한값

    const uploadImage = (blob: any) => {
        return dbs
            .child(uuidv4())
            .put(blob)
            .then(async (snapshot) => {
                let returnURL = '';
                await snapshot.ref.getDownloadURL().then((URL) => {
                    returnURL = URL;
                })
                return returnURL;
            })
    }

    const [title, setTitle] = useState('');
    const content: any = createRef();

    const write = () => {
        let idx = 0;
        db.collection('autoIncrement').where('field', '==', props.match.params.category)
        .get()
        .then((data:any) => {
            data.forEach((doc:any) => {
                idx = doc.data().count
            })
        })
        .then(() => {
            const data = {
                author : '김현호',
                title : title,
                content : content.current.getInstance().getHtml(),
                view : 0,
                idx : idx,
                date : firebase.firestore.FieldValue.serverTimestamp(),
                category : props.match.params.category,
            }
            db.collection(`board_${props.match.params.category}`).add(data)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.error(err);
            })
        })
        .then(() => {
            db.collection('autoIncrement').doc(props.match.params.category)
            .update({count : firebase.firestore.FieldValue.increment(1)})
            props.history.push(`/${props.match.params.category}`)
        })
        .catch((err) => {
            console.error(err);
        })
    }
    const classes = useStyles();
    return (
        <>
            <TextField
                fullWidth
                label="제목"
                onChange={e => setTitle(e.target.value)} />
            <Editor
                previewStyle="vertical"
                height="300px"
                initialEditType="markdown"
                placeholder="내용"
                ref={content}
                hooks={{
                    addImageBlobHook: async (blob, callback) => {
                        const upload = await uploadImage(blob);
                        callback(upload, 'alt text');
                        return false;
                    },
                }}
            />

            <Button variant="outlined" onClick={write}>작성</Button>
        </>
    )
}

export default Write;