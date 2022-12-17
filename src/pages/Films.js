import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useLayoutEffect, useState } from 'react'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import MenuOpcoes from '../components/MenuOpcoes'
import { getFilms } from '../services/StarWarsAPIService'

export default function Films() {

    const [dados, setDados] = useState([])

    useLayoutEffect(() => {
        getFilms()
            .then((data) => {
                setDados(data)
            })
            .catch((error) => {
                alert(error)
            })
    }, [])

    return (
        <>
            <Grid container style={{ padding: 10 }}>
                <Grid item md={12} xs={12} sm={12}>
                    <Cabecalho />
                </Grid>
                <Grid item md={12} xs={12} sm={12}>
                    <MenuOpcoes />
                    <div className='corpo'>
                        <h1>FILMES</h1>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="right">Episódio</TableCell>
                                        <TableCell align="right">Diretor</TableCell>
                                        <TableCell align="right">Nome</TableCell>
                                        <TableCell align="center">Data Lançamento</TableCell>
                                        <TableCell align="right">Texto da abertura</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        dados.length > 0 ?
                                            dados.map((row) => (
                                                <TableRow
                                                    key={row.id}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">
                                                        {row.episode_id}
                                                    </TableCell>
                                                    <TableCell align="right">{row.director}</TableCell>
                                                    <TableCell align="right">{row.title}</TableCell>
                                                    <TableCell align="center">{row.release_date}</TableCell>
                                                    <TableCell align="right">{row.opening_crawl}</TableCell>
                                                </TableRow>
                                            ))

                                            :

                                            <span>Nenhum dado para exibir.</span>
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </Grid>
                <Grid item md={12} xs={12} sm={12}>
                    <Rodape />
                </Grid>
            </Grid>
        </>
    )
}
