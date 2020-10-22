import React, { useState, useEffect } from 'react';
import { db } from '../config'
import moment from "moment";
import CircularProgress from '@material-ui/core/CircularProgress';
import { Viewer } from "@toast-ui/react-editor";

const Detail = (props: any) => {

    const [post, setPost] = useState();
    useEffect(() => {
        db.collection('board')
            .where('category', '==', props.match.params.category)
            .where('idx', '==', Number(props.match.params.idx))
            .get()
            .then((docs) => {
                console.log(docs);
                docs.forEach((doc) => {
                    setPost(doc.data());
                })
            })
            .catch((err) => {
                console.error(err);
            })
    }, [])
    return (
        <>
            {
                post !== undefined ?
                    <>
                        글번호 : {post.idx}<br />
                        제목 : {post.title}<br />
                        내용 : <Viewer initialValue={post.content} /><br />
                        작성일 : {moment(post.date.toDate()).format('YYYY-MM-DD HH:mm')}<br />
                        조회수 : {post.view}<br />
                        카테고리 : {post.category}
                    </>
                    :
                    <>
                        <CircularProgress />
                    </>
            }
        </>
    )
}

export default Detail;