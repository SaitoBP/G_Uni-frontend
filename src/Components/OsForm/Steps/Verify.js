// React:
import React, { useState } from 'react';

// Material UI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// ApiService:
import { tokenHeader } from '../../../Services/Api/ApiService';

// Main:
export default function Verify(props) {

  // States:
  const [cnpj, setCnpj] = useState('');

  const handleCnpj = async () => {
    const url = "http://localhost:8080/company/cnpj:" + cnpj;

    console.log(cnpj)

    const response = await fetch(url, {headers: tokenHeader});
    const data = await response.json();

    console.log(data);
  }

  const handleChange = e => {
    setCnpj(e.target.value);
  }

  const { close } = props;

  return (
    <>
      <DialogTitle id="form-dialog-title">Consulta Empresa</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Por favor, insira o CNPJ da empresa, caso ela ja exista no banco de dados, iremos puxar as ultimas
          informações cadastradas.
        </DialogContentText>

        <TextField autoFocus margin="dense" id="cnpj" label="CNPJ"
          type="text" variant="outlined" fullWidth onChange={handleChange} />

      </DialogContent>
      <DialogActions>
        <Button onClick={close} color="primary">Cancelar</Button>
        <Button onClick={handleCnpj} color="primary">Proximo</Button>
      </DialogActions>
    </>
  );
}
