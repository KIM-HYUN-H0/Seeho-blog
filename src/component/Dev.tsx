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
import { db } from '../config'

const useStyles = makeStyles((theme) => ({
    addButton: {
        position: 'fixed',
        bottom: '50px',
        right: '50px'
    },
    table: {
        width: '100%',
    },
    detail: {
        textDecoration: 'none',
        color: 'black',
        '&:hover': {
            opacity: 0.5,
        }
    }
}));
const Dev = () => {
    const [data, setData] = useState()
    useEffect(() => {
        db.collection('board').where('category', '==', 'dev')
            .get()
            .then((docs) => {
                let datas: any = [];
                docs.forEach((doc) => {
                    console.log(doc.data());
                    datas.push(doc.data());
                })
                setData(datas)
            })
    }, [])
    const classes = useStyles();
    return (
        <>
            <TableContainer component={Paper}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">번호</TableCell>
                            <TableCell align="left">제목</TableCell>
                            <TableCell align="center">작성자</TableCell>
                            <TableCell align="center">날짜</TableCell>
                            <TableCell align="center">조회수</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            data !== undefined ?
                                data.map((a: any) => {
                                    return (
                                        <TableRow component={Link} to={`dev/detail/${a.idx}`} className={classes.detail}>
                                            <TableCell align="center">{a.idx}</TableCell>
                                            <TableCell align="left">{a.title}</TableCell>
                                            <TableCell align="center">{a.author}</TableCell>
                                            <TableCell align="center">{a.date}</TableCell>
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
            <Fab component={Link} to="/dev/write" className={classes.addButton}>
                <AddIcon />
            </Fab>
        </>
    )
}

export default Dev;