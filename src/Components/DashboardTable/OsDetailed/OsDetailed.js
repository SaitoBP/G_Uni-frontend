// React:
import React, { useState } from 'react';

// Material UI Core:
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';

// Material UI Styles:
import { makeStyles } from '@material-ui/core/styles';

// Components:
import DocumentTable from './DocumentTable/DocumentTable';

// ApiService:
import api from '../../../Services/Api/ApiService';

const useStyle = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between'
  }
});

// Main Component:
export default function OsDetailed(props) {

  // Props:
  const { openOs, setOpenOs, osById, setOsById } = props;

  // Style:
  const classes = useStyle();

  // State Hook:
  const [editMode, setEditMode] = useState(false);

  // Função para fechar o Modal:
  const handleClose = () => {
    setOpenOs(false);
  };

  // DialogActions Conditional:
  const DialogButtons = editMode => {

    const save = () => {
      api.updateOs(osById)
        .then(response => setOsById(response))
        .catch(error => console.error(error))
    }

    if (!editMode) {
      return (
        <Button onClick={handleClose} color="primary">Fechar</Button>
      );
    } else {
      return (
        <>
          <Button onClick={handleClose} color="primary">Fechar</Button>
          <Button onClick={save} color="primary">Salvar</Button>
        </>
      );
    }
  }

  const DocumentForm = () => {

    let docs = ['PPRA', 'PCMSO_PPPA', 'LAUDO'];

    if (editMode) {

      const docButton = docs.map(doc => {
        return (
          <Grid key={doc} item xs={(12 / docs.length)}>
            <Button fullWidth variant='contained' color='primary'
              onClick={() => {
                api.postDocument(doc, osById)
                  .then(response => setOsById(response))
                  .catch(error => console.error(error))
              }}>
              {'Adicionar ' + doc}
            </Button>
          </Grid>
        )
      })
      return docButton
    } else {
      return <> </>
    }
  }

  return (
    <Dialog fullWidth maxWidth={'lg'} scroll={'body'} open={openOs} onClose={handleClose} aria-labelledby="form-dialog-titl">
      <DialogTitle id="form-dialog-title" className={classes.root} disableTypography>
        <Typography variant='h6'>Informações Detalhadas</Typography>
        <Typography variant='subtitle2'>Modo de edição <Switch checked={editMode} onChange={e => setEditMode(e.target.checked)} /> </Typography>
      </DialogTitle>

      <DialogContent>

        <Grid container spacing={2} justify='center'>

          <Grid item xs={12}>
            <DialogContentText>
              Dados da OS
            </DialogContentText>
          </Grid>

          <Grid item xs={2}>
            <TextField size={'small'} id="osNumber" label="Numero da OS"
              type="text" fullWidth inputProps={{ readOnly: !editMode }}
              value={osById.osNumber} variant='outlined'
              onChange={e => setOsById({
                ...osById,
                osNumber: e.target.value
              })} />
          </Grid>

          <Grid item xs={6}>
            <TextField size={'small'} id="companyName" label="Razão Social"
              type="text" fullWidth inputProps={{ readOnly: !editMode }}
              value={osById.company.companyName} variant='outlined'
              onChange={e => setOsById({
                ...osById,
                company: {
                  ...osById.company,
                  companyName: e.target.value
                }
              })} />
          </Grid>

          <Grid item xs={4}>
            <TextField size={'small'} id="cnpj" label="CNPJ"
              type="text" fullWidth inputProps={{ readOnly: !editMode }}
              value={osById.company.cnpj} variant='outlined'
              onChange={e => setOsById({
                ...osById,
                company: {
                  ...osById.company,
                  cnpj: e.target.value
                }
              })} />
          </Grid>

          <Grid item xs={12}>
            <DialogContentText>
              Documentos
            </DialogContentText>
          </Grid>

          <DocumentForm />

          <Grid item xs={12}>
            <DocumentTable documents={osById.documents} setOsById={setOsById} editMode={editMode} osById={osById} />
          </Grid>

        </Grid>

      </DialogContent>
      <DialogActions>
        {DialogButtons(editMode)}
      </DialogActions>
    </Dialog>
  );
}