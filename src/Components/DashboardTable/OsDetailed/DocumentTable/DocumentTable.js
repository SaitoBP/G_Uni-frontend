// React:
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 750,
  },
});

function DocumentTableHeader() {
  return (
    <TableHead>
      <TableRow>
        <TableCell align='left'>Documento</TableCell>
        <TableCell align='left'>Auxiliar</TableCell>
        <TableCell align='center'>Data de Atribuição</TableCell>
        <TableCell align='center'>Envio para Validação</TableCell>
        <TableCell align='center'>Finalização</TableCell>
      </TableRow>
    </TableHead>
  );
}

// Sub Component - TableBody:
function DocumentTableBody(props) {

  // Props:
  const { documents, setOsById, editMode, osById } = props;

  const handleSetDocuments = (e, i) => {
    const list = documents.map((doc, index) => {
      if (i === index) {
        return { ...doc, [e.target.name]: e.target.value }
      } else {
        return doc
      }
    })

    setOsById({
      ...osById,
      documents: list
    })
  }

  if (editMode) {
    return (
      <TableBody>
        {documents.map((document, index) => (
          <TableRow key={index}>

            <TableCell align='left'>
              <TextField fullWidth type='text' variant='outlined' name='docType'
                size='small' label='Tipo do documento' id={'docTypeId:' + index}
                value={document.docType} onChange={e => handleSetDocuments(e, index)} />
            </TableCell>

            <TableCell align='left'>
              <TextField fullWidth type='text' variant='outlined' name='auxiliar'
                size='small' label='Auxiliar' id={'auxiliarId: ' + index}
                value={document.auxiliar} onChange={e => handleSetDocuments(e, index)} />
            </TableCell>

            <TableCell align='center'>
              <TextField fullWidth type='date' variant='outlined' name='attribuitionDate'
                size='small' label='Data de Atribuição' id={'attribuitionDateId: ' + index}
                value={document.attribuitionDate} onChange={e => handleSetDocuments(e, index)}
                InputLabelProps={{ shrink: true }} />
            </TableCell>

            <TableCell align='center'>
              <TextField fullWidth type='date' variant='outlined' name='sendToValidationDate'
                size='small' label='Envio para validação' id={'sendToValidationDateId: ' + index}
                value={document.sendToValidationDate} onChange={e => handleSetDocuments(e, index)}
                InputLabelProps={{ shrink: true }} />
            </TableCell>

            <TableCell align='center'>
              <TextField fullWidth type='date' variant='outlined' name='finishDate'
                size='small' label='Finalização' id={'finishDateId: ' + index}
                value={document.finishDate} onChange={e => handleSetDocuments(e, index)}
                InputLabelProps={{ shrink: true }} />
            </TableCell>

          </TableRow>
        ))}
      </TableBody>
    );

  } else {
    return (
      <TableBody>
        {documents.map(document => (
          <TableRow key={document.id}>
            <TableCell align='left'>{document.docType}</TableCell>
            <TableCell align='left'>{document.auxiliar}</TableCell>
            <TableCell align='center'>{document.attribuitionDate}</TableCell>
            <TableCell align='center'>{document.sendToValidationDate}</TableCell>
            <TableCell align='center'>{document.finishDate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    );
  }
}

export default function DocumentTable(props) {
  const classes = useStyles();

  // Props:
  const { documents, setOsById, editMode, osById } = props;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <DocumentTableHeader />
        <DocumentTableBody documents={documents} setOsById={setOsById} editMode={editMode} osById={osById} />
      </Table>
    </TableContainer>
  );
}
