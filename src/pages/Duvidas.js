import { Button, Grid, TextField } from '@mui/material'
import React, { useLayoutEffect, useState } from 'react'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import MenuOpcoes from '../components/MenuOpcoes'
import { addDoubt } from '../services/FirebaseDBService'

export default function Duvidas() {

  const [nome, setNome] = useState("")
  const [errorNome, setErrorNome] = useState(false)

  const [email, setEmail] = useState("")
  const [errorEmail, setErrorEmail] = useState(false)
  
  const [duvida, setDuvida] = useState("")
  const [errorDuvida, setErrorDuvida] = useState(false)

  const validaCampos = async () => {
    if (nome !== "" && email !== "" && duvida !== ""){
      await addDoubt(nome, email, duvida)
        .then((id) => {
          alert("Dúvida enviada com sucesso!\nId da dúvida: " + id)
          limparCampos()
        })
        .catch((e) => alert(e))
    }

    setErrorNome(nome === "")
    setErrorEmail(email === "")
    setErrorDuvida(duvida === "")
  }

  const limparCampos = () => {
    setNome("")
    setEmail("")
    setDuvida("")
  }


  return (
    <>
      <Grid container style={{ padding: 10 }}>
        <Grid item md={12} xs={12} sm={12}>
          <Cabecalho />
        </Grid>
        <Grid item md={12} xs={12} sm={12}>
          <MenuOpcoes />
          <div className='corpo'>
            <h1 style={{ textAlign: 'center' }}>Nos envie sua dúvida!</h1>
            <Grid container justifyContent={'space-around'}>
              <Grid container style={{ margin: 20 }}>
                <Grid item md={2} xs={3} sm={3}></Grid>
                <Grid item md={4} xs={4} sm={4}>
                  <TextField id="filled-basic" label="Nome" variant="filled" style={{ width: '95%' }}
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    error={errorNome} 
                    helperText={errorNome ? "Preencha o campo corretamente" : ""}/>
                </Grid>
                <Grid item md={4} xs={4} sm={4}>
                  <TextField id="filled-basic" label="Email" variant="filled" fullWidth type='email' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={errorEmail}
                    helperText={errorEmail ? "Preencha o campo corretamente" : ""}
                  />
                </Grid>
                <Grid item md={2} xs={3} sm={3}></Grid>
              </Grid>

              <Grid container style={{ margin: 20 }}>
                <Grid item md={2} xs={3} sm={3}></Grid>
                <Grid item md={8} xs={8} sm={8}>
                  <TextField id="filled-basic" label="Dúvida" variant="filled" multiline fullWidth 
                    value={duvida}
                    onChange={(e) => setDuvida(e.target.value)}
                    error={errorDuvida}
                    helperText= {errorDuvida ? "Preencha o campo corretamente" : ""}
                  />
                </Grid>
                <Grid item md={2} xs={3} sm={3}></Grid>
              </Grid>
              <Button variant='outlined' onClick={() => validaCampos()}>Enviar</Button>
            </Grid>
          </div>
        </Grid>
        <Grid item md={12} xs={12} sm={12}>
          <Rodape />
        </Grid>
      </Grid>
    </>

  )
}
