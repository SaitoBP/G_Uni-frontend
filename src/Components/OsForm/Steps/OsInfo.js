// React:
import React from 'react';

// Material UI Core:
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid'

// Material 

// Main:
export default function OsInfo(props) {

  // Props:
  const { prev, submit, setOs, os } = props;

  return (
    <>
      <DialogTitle id="form-dialog-title">Cadastro da OS</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Por favor, insira as informações da OS
        </DialogContentText>

        <Grid container spacing={2}>

          <Grid item xs={3}>
            <TextField autoFocus size={'small'} id="osNumber" label="Numero da OS"
              type="text" value={os.osNumber} variant="outlined" fullWidth
              onChange={e => setOs({
                ...os,
                osNumber: e.target.value
              })} name='osNumber' />
          </Grid>

          <Grid item xs={9} >
            <TextField size={'small'} id="uo" label="Unidade"
              type="text" value={os.uo} variant="outlined" fullWidth
              onChange={e => setOs({
                ...os,
                uo: e.target.value
              })} name='uo' />
          </Grid>

          <Grid item xs={6}>
            <TextField size={'small'} id="emissionDate" label="Data de Emissão"
              type="date" InputLabelProps={{ shrink: true }} value={os.emissionDate} variant="outlined" fullWidth
              onChange={e => setOs({
                ...os,
                emissionDate: e.target.value
              })} name='emissionDate' />
          </Grid>

          <Grid item xs={6}>
            <TextField size={'small'} id="validityDate" label="Prazo da OS"
              type="date" InputLabelProps={{ shrink: true }} value={os.validityDate} variant="outlined" fullWidth
              onChange={e => setOs({
                ...os,
                validityDate: e.target.value
              })} name='validityDate'/>
          </Grid>

        </Grid>


      </DialogContent>
      <DialogActions>
        <Button onClick={prev} color="primary">Voltar</Button>
        <Button onClick={submit} color="primary">Proximo</Button>
      </DialogActions>
    </>
  );
}
