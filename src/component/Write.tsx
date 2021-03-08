import React, { useState, useEffect, createRef } from 'react';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import { Editor } from "@toast-ui/react-editor";
import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import axios from 'axios';
import url from '../config';

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
        
    }

    const [title, setTitle] = useState('');
    const content: any = createRef();

    const write = () => {
        axios.post(`${url}/board`, {
            title : title,
            category : props.match.params.category,
            content : content.current.getInstance().getHtml(),
        })
        .then((result) => {
            console.log(result);
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
                        // callback(upload, 'alt text');
                        return false;
                    },
                }}
            />

            <Button variant="outlined" onClick={write}>작성</Button>
        </>
    )
}

export default Write;