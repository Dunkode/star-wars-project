import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useLayoutEffect, useState } from 'react'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import MenuOpcoes from '../components/MenuOpcoes'
import { getPeoples } from '../services/StarWarsAPIService'

export default function People() {

    const [dados, setDados] = useState([])

    useLayoutEffect(() => {
        getPeoples()
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
                        <h1>PESSOAS</h1>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="right">Nome</TableCell>
                                        <TableCell align="right">Cor dos olhos</TableCell>
                                        <TableCell align="right">Cor do cabelo</TableCell>
                                        <TableCell align="center">Peso (kg)</TableCell>
                                        <TableCell align="center">Altura (m)</TableCell>
                                        <TableCell align="right">Ano de nascimento</TableCell>
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
                                                    <TableCell align="right">{row.name}</TableCell>
                                                    <TableCell align="right">{row.eye_color}</TableCell>
                                                    <TableCell align="right">{row.hair_color}</TableCell>
                                                    <TableCell align="center">{row.mass}</TableCell>
                                                    <TableCell align="center">{row.height / 100}</TableCell>
                                                    <TableCell align="right">{row.birth_year}</TableCell>
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
