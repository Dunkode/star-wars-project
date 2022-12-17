import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useLayoutEffect, useState } from 'react'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import MenuOpcoes from '../components/MenuOpcoes'
import { getSpecies } from '../services/StarWarsAPIService'

export default function Species() {

    const [dados, setDados] = useState([])

    useLayoutEffect(() => {
        getSpecies()
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
                        <h1>Espécies</h1>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="right">Nome</TableCell>
                                        <TableCell align="right">Classificação</TableCell>
                                        <TableCell align="center">Expectativa de vida</TableCell>
                                        <TableCell align="right">Linguagem</TableCell>
                                        <TableCell align="center">Peso médio</TableCell>
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
                                                    <TableCell align="right">{row.classification}</TableCell>
                                                    <TableCell align="center">{row.average_lifespan}</TableCell>
                                                    <TableCell align="right">{row.language}</TableCell>
                                                    <TableCell align="center">{row.average_height}</TableCell>
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
