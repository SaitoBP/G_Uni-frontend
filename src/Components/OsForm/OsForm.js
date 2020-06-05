// React:
import React, { useState } from 'react';

// Material UI:
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';

// Components:
import Verify from './Steps/Verify';
import CompanyInfo from './Steps/CompanyInfo';

// ApiService:
import api from '../../Services/Api/ApiService';

export default function FormDialog() {

  // States:
  const [open, setOpen] = useState(false);
  const [cnpj, setCnpj] = useState('');
  const [company, setCompany] = useState({});
  const [step, setStep] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Handles do Step:
  const handleNextStep = () => {
    setStep(step + 1);
  }

  const handlePrevStep = () => {
    setStep(step - 1);
  }

  // Teste
  const handleCnpj = async () => {
    api.verifyCnpj(cnpj)
      .then(response => {
        console.log(response)
        setCompany(response);
        handleNextStep();
      })
      .catch(error => console.error(error));
  }

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <Verify close={handleClose} handleCnpj={handleCnpj} setCnpj={setCnpj} />;
      case 1:
        return <CompanyInfo company={company} setCompany={setCompany}/>
      default:
        throw new Error('Unknown step');
    }
  }

  return (
    <div>

      <IconButton onClick={handleClickOpen}>
        <AddCircleIcon fontSize="large" />
      </IconButton>

      <Dialog maxWidth={'md'} scroll={'body'} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        {renderStepContent(step)}
      </Dialog>
    </div>
  );
}
