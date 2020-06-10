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
  const [documentId, setDocumentId] = useState([]);

  // Função para fechar o Modal:
  const handleClose = () => {setOpenOs(false)};

  // Função para adicionar documentos ao 'State' 'osById':
  const handleDocuments = () => {
    const emptyDocument = {
      id: '',
      docType: '',
      auxiliar: '',
      attribuitionDate: '',
      sendToValidationDate: '',
      finishDate: ''
    }
    setOsById({
      ...osById,
      documents: [
        ...osById.documents,
        emptyDocument
      ]
    })
  }

  // DialogActions Conditional:
  const DialogButtons = editMode => {

    if (!editMode) {
      return (
        <Button onClick={handleClose} color="primary">Fechar</Button>
      );
    } else {
      return (
        <>
          <Button onClick={handleClose} color="primary">Fechar</Button>
          <Button onClick={() => {
            console.log(osById.documents);

            osById.documents.forEach((document) => {
              if (document.id === '') {
                console.log('POST');
                api.postDocument(document)
                  .then(response => {
                    console.log(response.id)
                    setDocumentId([...documentId, response.id])
                  })
                  .catch(error => console.error(error));
              } else {
                console.log('PUT')
              }
            });
          }} color="primary">Salvar</Button>
        </>
      );
    }
  }

  const DocumentForm = editMode => {
    if (editMode) {
      return (
        <>
          <Grid item xs={12}>
            <Button fullWidth color='primary' variant='outlined'
              onClick={handleDocuments}>Adicionar Documento</Button>
          </Grid>
        </>
      )
    }
  }

  return (
    <Dialog fullWidth maxWidth={'lg'} scroll={'body'} open={openOs} onClose={handleClose} aria-labelledby="form-dialog-titl">
      <DialogTitle id="form-dialog-title" className={classes.root} disableTypography>
        <Typography variant='h6'>Informações Detalhadas</Typography>
        <Typography variant='subtitle2'>Modo de edição <Switch checked={editMode} onChange={e => setEditMode(e.target.checked)} /> </Typography>
      </DialogTitle>

      <DialogContent>


        <Grid container spacing={2} >

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

          {DocumentForm(editMode)}

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