import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';
import Aboutme from './etc/Aboutme';
// import ReactFullpage from "@fullpage/react-fullpage";
import { Translate } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        color: 'white'
    },
    title: {
        position : 'relative',
        top : '30%'
    },
    font: {

    }
}))

const Introduce = () => {
    const classes = useStyles();
    return (
        <>
            {/* <ReactFullpage
                scrollOverflow={true}
                sectionsColor={["orange", "green", "gray", "black"]}
                scrollingSpeed={500}
                render={({ }) => {
                    return (
                        <>
                            <div className={`section ${classes.root}`}>
                                <Typography variant='h3'>개발자 김현호의 블로그입니다.</Typography>
                            </div>
                            <div className={`section ${classes.root}`}>
                                <Typography variant='h3'>About Me</Typography>
                                <Typography variant='h5'><Aboutme /></Typography>
                            </div>
                            <div className={`section ${classes.root}`}>
                                <Typography className={classes.title} variant='h3'>{`<- SKILL ->`}</Typography>
                                <div className='slide'>
                                    <Typography variant='h4'>슬라이드~1</Typography>
                                </div>
                                <div className='slide'>
                                    <Typography variant='h4'>슬라이드~2</Typography>
                                </div>
                                <div className='slide'>
                                    <Typography variant='h4'>슬라이드~3</Typography>
                                </div>
                                <div className='slide'>
                                    <Typography variant='h4'>슬라이드~4</Typography>
                                </div>
                            </div>
                            <div className={`section ${classes.root}`}>
                                <Typography variant='h3'>Project</Typography>
                            </div>
                        </>
                    );
                }}
            /> */}
        </>
        // <>
        // <Paper elevation={5} className={classes.root}>
        //     <Typography className={classes.title} variant='h3'>개발자 김현호의 블로그입니다.</Typography>
        // </Paper>
        // <Paper elevation={5} className={classes.root}>
        //     <Typography className={classes.title} variant='h3'>About Me</Typography>
        //     <Typography variant='h5'><Aboutme /></Typography>
        // </Paper>
        // <Paper elevation={5} className={classes.root}>
        //     <Typography className={classes.title} variant='h3'>SKILL</Typography>
        // </Paper>
        // <Paper elevation={5} className={classes.root}>
        //     <Typography className={classes.title} variant='h3'>Project</Typography>
        // </Paper>
        // </>
    )
}
export default Introduce;