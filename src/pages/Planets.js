import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useLayoutEffect, useState } from 'react'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import MenuOpcoes from '../components/MenuOpcoes'
import { getPlanets } from '../services/StarWarsAPIService'

export default function Planets() {

    const [dados, setDados] = useState([])

    useLayoutEffect(() => {
        getPlanets()
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
                        <h1>PLANETAS</h1>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="right">Nome</TableCell>
                                        <TableCell align="right">Clima</TableCell>
                                        <TableCell align="right">Terreno</TableCell>
                                        <TableCell align="center">População</TableCell>
                                        <TableCell align="center">Diâmetro (km)</TableCell>
                                        <TableCell align="center">Período orbital</TableCell>
                                        <TableCell align="center">Período de rotação</TableCell>
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
                                                    <TableCell align="right">{row.climate}</TableCell>
                                                    <TableCell align="right">{row.terrain}</TableCell>
                                                    <TableCell align="center">{row.population}</TableCell>
                                                    <TableCell align="center">{row.diameter}</TableCell>
                                                    <TableCell align="center">{row.orbital_period}</TableCell>
                                                    <TableCell align="center">{row.rotation_period}</TableCell>
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
