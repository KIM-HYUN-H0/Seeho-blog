import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';
import Aboutme from './etc/Aboutme';

const useStyles = makeStyles((theme) => ({
    root: {
        display : 'flex',
        flexDirection: "column",
        textAlign: 'center',
        width: '100%',
        height: 1000,
        marginBottom : 10,
        justifyContent: "center",
    },
    title: {
        
    }
}))

const Introduce = () => {
    const classes = useStyles();
    return (
        <>
            <Paper elevation={5} className={classes.root}>
                <Typography className={classes.title} variant='h3'>개발자 김현호의 블로그입니다.</Typography>
            </Paper>
            <Paper elevation={5} className={classes.root}>
                <Typography className={classes.title} variant='h3'>About Me</Typography>
                <Typography variant='h5'>{Aboutme()}</Typography>
            </Paper>
            <Paper elevation={5} className={classes.root}>
                <Typography className={classes.title} variant='h3'>SKILL</Typography>
            </Paper>
            <Paper elevation={5} className={classes.root}>
                <Typography className={classes.title} variant='h3'>Project</Typography>
            </Paper>
        </>
    )
}
export default Introduce;