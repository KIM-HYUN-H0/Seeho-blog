import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MailIcon from '@material-ui/icons/Mail';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        position: 'fixed',
        background: 'black',
        width: 350,
        textAlign: 'center',
    },
    title: {
        color: 'white',
        marginTop: 100,
        marginBottom: 50
    },
    menu: {

        borderBottom: '1px solid',
        borderBottomColor: 'white',
        marginTop: 30,
        '&:hover': {
            color: 'pink',
            borderBottomColor: 'pink'
        }
    },
    menuFont: {
        color: 'white',
    },
    icon: {
        color: 'white',
        marginTop: 30,
    }
}))

const Menu = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Typography className={classes.title} variant='h2'>
                        <span style={{ color: '#f1f3f5' }}>See</span>
                        <span style={{ color: '#dee2e6' }}>Ho</span>
                    </Typography>
                </Link>
            </div>

            <div className={classes.menu}>
                <Link to="/introduce" style={{ textDecoration: 'none' }}><Typography variant='h5' className={classes.menuFont}>소개</Typography></Link>
            </div>
            <div className={classes.menu}>
                <Typography variant='h5' className={classes.menuFont}>공부</Typography>
            </div>
            <div className={classes.menu}>
                <Link to="/dev" style={{ textDecoration : 'none' }}><Typography variant='h5' className={classes.menuFont}>환경</Typography></Link>
            </div>
            <div className={classes.menu}>
                <Typography variant='h5' className={classes.menuFont}>자주 사용하는 코드</Typography>
            </div>

            <div className={classes.icon}><MailIcon />cardbye@naver.com</div>

        </div>
    )
}
export default Menu;