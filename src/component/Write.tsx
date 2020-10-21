import React, { useState, useEffect } from 'react';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import { db} from '../config'
import firebase from 'firebase';

const useStyles = makeStyles((theme) => ({
    title: {

    },
    content: {
        marginTop: theme.spacing(3),
        height: '300px'
    }
}))
const Write = (props:any) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const write = () => {
        let idx = 0;
        db.collection('autoIncrement').where('field', '==', 'dev')
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
                content : content,
                view : 0,
                idx : idx,
                date : '2020.10.20',
                category : 'dev',
            }
            db.collection('board').add(data)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.error(err);
            })
        })
        .then(() => {
            db.collection('autoIncrement').doc('dev')
            .update({count : firebase.firestore.FieldValue.increment(1)})
            props.history.push('/dev')
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
            <TextField
                className={classes.content}
                fullWidth
                label="내용"
                variant="outlined"
                onChange={e => setContent(e.target.value)} />

            <Button variant="outlined" onClick={write}>작성</Button>
        </>
    )
}

export default Write;