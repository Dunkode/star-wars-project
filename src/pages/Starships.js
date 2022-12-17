import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useLayoutEffect, useState } from 'react'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import MenuOpcoes from '../components/MenuOpcoes'
import { getStarships } from '../services/StarWarsAPIService'

export default function Starships() {

    const [dados, setDados] = useState([])

    useLayoutEffect(() => {
        getStarships()
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
                    <div className='corpo'>
                        <h1>NAVES</h1>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="right">Nome da Nave</TableCell>
                                        <TableCell align="center">Custo em créditos</TableCell>
                                        <TableCell align="right">Fabricante</TableCell>
                                        <TableCell align="right">Modelo</TableCell>
                                        <TableCell align="center">Passageiros</TableCell>
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
                                                    <TableCell align="center">{row.cost_in_credits}</TableCell>
                                                    <TableCell align="right">{row.manufacturer}</TableCell>
                                                    <TableCell align="right">{row.model}</TableCell>
                                                    <TableCell align="center">{row.passengers}</TableCell>
                                                </TableRow>
                                            ))

                                            :

                                            <span>Nenhum dado para exibir.</span>
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    </div>
                </Grid>
                <Grid item md={12} xs={12} sm={12}>
                    <Rodape />
                </Grid>
            </Grid>
        </>
    )
}
