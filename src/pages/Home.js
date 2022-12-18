import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useLayoutEffect, useState } from 'react'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import MenuOpcoes from '../components/MenuOpcoes'
import { getDoubts } from '../services/FirebaseDBService'

export default function Home() {

  const [doubts, setDoubts] = useState([])

  useLayoutEffect( () => {
    getDoubts()
      .then((data) => {setDoubts(data)
      console.log(data)})
      .catch((e) => alert(e))
      
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
            <h1>Dúvidas da comunidade</h1>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Nome</TableCell>
                    <TableCell align="left">Contato</TableCell>
                    <TableCell align="right">Dúvida</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    doubts.length > 0 ?
                      doubts.map((row) => (
                        <TableRow
                          key={row.id}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell align="left">{row.name}</TableCell>
                          <TableCell align="left">{row.contact}</TableCell>
                          <TableCell align="right">{row.doubt}</TableCell>
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
