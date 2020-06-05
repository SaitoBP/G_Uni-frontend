// React:
import React from 'react';

// Material UI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// Main:
export default function Verify(props) {

  // Props:
  const { handleCnpj, setCnpj, close } = props;

  return (
    <>
      <DialogTitle id="form-dialog-title">Consulta Empresa</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Por favor, insira o CNPJ da empresa, caso ela ja exista no banco de dados, iremos puxar as ultimas
          informações cadastradas.
        </DialogContentText>

        <TextField autoFocus size={'small'} id="cnpj" label="CNPJ"
          type="text" variant="outlined" fullWidth onChange={e => setCnpj(e.target.value)} />

      </DialogContent>
      <DialogActions>
        <Button onClick={close} color="primary">Cancelar</Button>
        <Button onClick={handleCnpj} color="primary">Proximo</Button>
      </DialogActions>
    </>
  );
}
