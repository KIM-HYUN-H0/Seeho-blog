import React, { useState, useEffect } from 'react';
import moment from "moment";
import CircularProgress from '@material-ui/core/CircularProgress';
import { Viewer } from "@toast-ui/react-editor";
import Container from '@material-ui/core/Container';
import { makeStyles } from "@material-ui/core/styles";
import ScheduleIcon from '@material-ui/icons/Schedule';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined';

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

    const [post, setPost] = useState();
    const [doca, setDoca] = useState<any>(null);

    useEffect(() => {
        // db.collection(`board_${props.match.params.category}`)
        //     .where('idx', '==', Number(props.match.params.idx))
        //     .get()
        //     .then((docs) => {
        //         console.log(docs);
        //         docs.forEach((doc) => {
        //             setPost(doc.data());
        //             setDoca(doc.id)
        //         })
        //     })
        //     .catch((err) => {
        //         console.error(err);
        //     })
    }, [])

    const deleteContent = () => {
        // db.collection(`board_${props.match.params.category}`)
        // .doc(doca)
        // .delete()
        // .then((result) => {
        //     props.history.push(`/${props.match.params.category}`)
        // })
    }

    const updateContent = () => {
        
    }

    const classes = useStyles();
    return (
        <>
        </>
        // <Container className={classes.wrapper}>
        //     {
        //         post !== undefined ?
        //             <>
        //                 <div>
        //                     {/* <span>{post.idx}</span> */}
        //                     <span className={classes.title}>{post.title}</span>
        //                 </div>
        //                 <div className={classes.main}>
        //                     <span className={classes.sub}><ScheduleIcon />{moment(post.date.toDate()).format('YYYY-MM-DD HH:mm')}</span>
        //                     <span className={classes.sub}><VisibilityIcon />view {post.view}</span>
        //                     <span className={classes.sub}><FolderOpenOutlinedIcon />{post.category}</span>
        //                 </div>
        //                 <Viewer initialValue={post.content} />
        //                 <button onClick={deleteContent}>삭제</button>
        //                 <button onClick={updateContent}>수정</button>
        //             </>
        //             :
        //             <>
        //                 <CircularProgress />
        //             </>
        //     }
        // </Container>
    )
}

export default Detail;