// React:
import React, { useState } from 'react';

// Material UI:
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';

// Components:
import Verify from './Steps/Verify';
import CompanyInfo from './Steps/CompanyInfo';
import OsInfo from './Steps/OsInfo';

// ApiService:
import api from '../../Services/Api/ApiService';

export default function FormDialog() {

  // States:
  const [open, setOpen] = useState(false);
  const [method, setMethod] = useState('');
  const [step, setStep] = useState(0);

  const companyInit = {
    companyName: '',
    cnae: '',
    cnpj: '',
    information: {
      employees: '',
      positions: '',
      sectors: '',
      contact: {
        managerName: '',
        managerEmail: '',
        managerPhone: '',
        contactName: '',
        contactEmail: '',
        contactPhone: ''
      }
    },
    location: {
      address: '',
      city: '',
      zipCode: '',
    }
  }

  const [company, setCompany] = useState(companyInit);
  const [os, setOs] = useState({
    osNumber: '',
    emissionDate: '',
    validityDate: '',
    uo: ''
  });

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setStep(0);
  };

  // Handles do Step:
  const handleNextStep = () => setStep(step + 1);
  const handlePrevStep = () => setStep(step - 1);

  // Verifica o CNPJ e retorna (se existente) uma empresa, e um metodo (PUT ou POST)
  const handleCnpj = () => {
    api.verifyCnpj(company.cnpj)
      .then(response => {
        if (response.method === 'PUT') {
          setCompany(response.content)
        } else {
          setCompany({ ...companyInit, cnpj: response.content.cnpj })
        }
        setMethod(response.method)
        handleNextStep();
      })
      .catch(error => console.error(error));
  }

  const handleSubmit = () => {
    console.log(method)
    api.postOs(company, os, method)
      .catch(error => console.error(error))
  }

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <Verify close={handleClose} handleCnpj={handleCnpj}
          setCompany={setCompany} company={company} />;
      case 1:
        return <CompanyInfo company={company} setCompany={setCompany}
          prev={handlePrevStep} next={handleNextStep} />
      case 2:
        return <OsInfo os={os} setOs={setOs}
          prev={handlePrevStep} submit={handleSubmit} />
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
