import React, { useState, useEffect } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import moment from "moment";
import axios from 'axios';
import url from '../config';

const useStyles = makeStyles((theme) => ({
    addButton: {
        position: 'fixed',
        bottom: '50px',
        right: '50px'
    },
    table: {
        // width: '100%',
    },
    detail: {
        textDecoration: 'none',
        color: 'black',
        '&:hover': {
            opacity: 0.5,
        },
        [theme.breakpoints.down('sm')]: {
            backgroundColor: 'green'
        },
        [theme.breakpoints.up('md')]: {
            backgroundColor: 'blue'
        },
        [theme.breakpoints.up('lg')]: {
            backgroundColor: 'pink'
        }
    }
}));
const Board = (props: any) => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`${url}/board`, {
            params : {
                category : props.match.params.category
            }
        })
        .then((results) => {
            setData(results.data.message);
        })
        .catch((err) => {
            console.error(err);
        })
    }, [props.match.params.category])

    const detailOpen = (idx: number) => {
        props.history.push(`/${props.match.params.category}/detail/${idx}`)
    }
    const classes = useStyles();

    return (
        <>
            <TableContainer component={Paper}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">제목</TableCell>
                            <TableCell align="center">작성자</TableCell>
                            <TableCell align="center">날짜</TableCell>
                            <TableCell align="center">조회수</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            data.length > 0 ?
                                data.map((a: any, index: number) => {
                                    return (
                                        <TableRow key={index} className={classes.detail} onClick={e => detailOpen(a.idx)}>
                                            <TableCell align="left">{a.title}</TableCell>
                                            <TableCell align="center">{a.author}</TableCell>
                                            <TableCell align="center">
                                                {a.date ?
                                                    moment(a.date).format('YYYY-MM-DD HH:mm')
                                                    : '새로고침을 눌러주세용'}
                                            </TableCell>
                                            <TableCell align="center">{a.view}</TableCell>
                                        </TableRow>
                                    )
                                })
                                :
                                null
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <Fab component={Link} to={`/${props.match.params.category}/write`} className={classes.addButton}>
                <AddIcon />
            </Fab>
        </>
    )
}

export default Board;