import { Grid, Icon } from '@mui/material'
import React from 'react'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import MenuOpcoes from '../components/MenuOpcoes'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Sobre() {

  return (
    <>
      <Grid container style={{ padding: 10 }}>
        <Grid item md={12} xs={12} sm={12}>
          <Cabecalho />
        </Grid>
        <Grid item md={12} xs={12} sm={12}>
          <MenuOpcoes />
          <div className='corpo'>
            <Grid container style={{ textAlign: 'center' }}>
              <Grid item md={12} xs={12} sm={12}>
                <h1>Dados do Desenvolvedor</h1>
              </Grid>

              <Grid item md={1} xs={12} sm={12}></Grid>

              <Grid item md={6} xs={12} sm={12}>
                <Grid container className='desenvCard'>
                  <Grid item md={3} xs={12} sm={12}>
                    <img src={require('../assets/images/desenv.jpeg')} className='desenvImage'></img>
                  </Grid>
                  <Grid item md={5} xs={12} sm={12}>
                    <Grid container style={{ textAlign: 'left' }} className='desenvCard'>
                      <Grid item md={12} xs={12} sm={12}>
                        <h3>Éderson Vidal Junior</h3>
                      </Grid>
                      <Grid item md={12} xs={12} sm={12}>
                        <h3>(54) 996238393</h3>
                      </Grid>
                      <Grid item md={12} xs={12} sm={12} style={{ marginTop: 10 }}>
                        <a href='https://www.linkedin.com/in/edersonvidal/'>
                          <LinkedInIcon />
                        </a>
                        <a href='mailto:edersonvidal137@gmail.com'>
                          <EmailIcon />
                        </a>
                        <a href='https://github.com/Dunkode'>
                          <GitHubIcon />
                        </a>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
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
