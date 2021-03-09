import React, { useState, useEffect } from 'react';
import moment from "moment";
import CircularProgress from '@material-ui/core/CircularProgress';
import { Viewer } from "@toast-ui/react-editor";
import Container from '@material-ui/core/Container';
import { makeStyles } from "@material-ui/core/styles";
import ScheduleIcon from '@material-ui/icons/Schedule';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined';
import axios from 'axios';
import url from '../config';

const useStyles = makeStyles((theme) => ({
    main: {
        display: 'flex',
        flexDirection: 'row',
    },
    sub: {
        color: 'gray',
        marginRight : 10,
        display: 'flex',
        alignItems: 'center',
    },
    title : {
        fontSize : '30px',
    },
    wrapper : {
        marginTop : theme.spacing(5)
    }
}));
const Detail = (props: any) => {

    const [post, setPost] = useState<any>();
    const [doca, setDoca] = useState<any>(null);

    useEffect(() => {
        axios.get(`${url}/board/${props.match.params.idx}`)
        .then((results) => {
            setPost(results.data.message);
        })
        .catch((err) => {
            console.error(err);
        })
    }, [])

    const deleteContent = () => {

    }

    const updateContent = () => {
        
    }

    const classes = useStyles();
    return (
        <Container className={classes.wrapper}>
            {
                post != undefined ?
                    <>
                        <div>
                            {/* <span>{post.idx}</span> */}
                            <span className={classes.title}>{post[0].title}</span>
                        </div>
                        <div className={classes.main}>
                            <span className={classes.sub}><ScheduleIcon />{moment(post[0].date).format('YYYY-MM-DD HH:mm')}</span>
                            <span className={classes.sub}><VisibilityIcon />view {post[0].view}</span>
                            <span className={classes.sub}><FolderOpenOutlinedIcon />{post[0].category}</span>
                        </div>
                        <Viewer initialValue={post[0].content} />
                        <button onClick={deleteContent}>삭제</button>
                        <button onClick={updateContent}>수정</button>
                    </>
                    :
                    <>
                        <CircularProgress />
                    </>
            }
        </Container>
    )
}

export default Detail;