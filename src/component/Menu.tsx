import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MailIcon from '@material-ui/icons/Mail';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        position: 'fixed',
        background: 'black',
        width: 250,
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
    },
    open : {
        position : 'fixed',
        left : open =>
        open === true 
        ? '350px'
        : '0px',
        top : '15px',
        transform : 'translate(0, -50%)',
    },
    drawer : {
        
    }
}))

const Menu = () => {
    
    const [open, setOpen] = useState(false);
    const classes = useStyles(open);

    return (
        <>
            <Button className={classes.open} onClick={e => setOpen((prev) => !prev)}>
                {open === true
                ? <KeyboardArrowLeftIcon />
                : <MenuIcon />
                }
                
            </Button>
            <SwipeableDrawer className={classes.drawer} open={open} onOpen={e => setOpen(false)} onClose={e => setOpen((prev) => !prev)}>
                <div className={classes.root}>
                    <div>
                        <Link to="/" style={{ textDecoration: 'none' }} onClick={e => setOpen(false)}>
                            <Typography className={classes.title} variant='h2'>
                                <span style={{ color: '#f1f3f5' }}>See</span>
                                <span style={{ color: '#dee2e6' }}>Ho</span>
                            </Typography>
                        </Link>
                    </div>

                    <div className={classes.menu}>
                        <Link to="/introduce" style={{ textDecoration: 'none' }} onClick={e => setOpen(false)}><Typography variant='h5' className={classes.menuFont}>소개</Typography></Link>
                    </div>
                    <div className={classes.menu}>
                        <Typography variant='h5' className={classes.menuFont}>공부</Typography>
                    </div>
                    <div className={classes.menu}>
                        <Link to="/dev" style={{ textDecoration: 'none' }} onClick={e => setOpen(false)}><Typography variant='h5' className={classes.menuFont}>환경</Typography></Link>
                    </div>
                    <div className={classes.menu}>
                    <Link to="/code" style={{ textDecoration: 'none' }} onClick={e => setOpen(false)}><Typography variant='h5' className={classes.menuFont}>자주 사용하는 코드</Typography></Link>
                    </div>

                    <div className={classes.icon}><MailIcon />cardbye@naver.com</div>

                </div>
            </SwipeableDrawer>

        </>
    )
}
export default Menu;