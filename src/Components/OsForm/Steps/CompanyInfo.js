// React:
import React, { useState } from 'react';

// Material UI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';

// Main:
export default function CompanyInfo(props) {

  // Props:
  const { company, setCompany } = props;

  // States Hooks:
  const [companyName, setCompanyName] = useState(company.companyName);
  const [cnpj, setCnpj] = useState(company.cnpj);
  const [cnae, setCnae] = useState(company.cnae);
  const [address, setAddress] = useState(company.location.address);
  const [city, setCity] = useState(company.location.city);
  const [zipCode, setZipCode] = useState(company.location.zipCode);
  const [employees, setEmployees] = useState(company.information.employees);
  const [sectors, setSectors] = useState(company.information.sectors);
  const [positions, setPositions] = useState(company.information.positions);
  const [managerName, setManagerName] = useState(company.information.contact.managerName);
  const [managerEmail, setManagerEmail] = useState(company.information.contact.managerEmail);
  const [managerPhone, setManagerPhone] = useState(company.information.contact.managerPhone);
  const [contactName, setContactName] = useState(company.information.contact.contactName);
  const [contactEmail, setContactEmail] = useState(company.information.contact.contactEmail);
  const [contactPhone, setContactPhone] = useState(company.information.contact.contactPhone);

  const dialogText = () => {
    if (company === {}) {
      return "Nenhuma infomação encontrada, por favor preencher os campos antes de prossegui"
    } else {
      return "Por favor, insira verifique se as informações estão corretas antes de continuar"
    }
  }

  return (
    <>
      <DialogTitle id="form-dialog-title">Cadastro da Empresa</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {dialogText()}
        </DialogContentText>

        <Grid container spacing={2}>

          <Grid item xs={12}>
            <TextField autoFocus size={'small'} id="companyName" label="Razão Social"
              type="text" value={companyName} variant="outlined" fullWidth
              onChange={e => setCompanyName(e.target.value)} />
          </Grid>

          <Grid item xs={8}>
            <TextField size={'small'} id="cnpj" label="CNPJ"
              type="text" value={cnpj} variant="outlined" fullWidth
              onChange={e => setCnpj(e.target.value)} />
          </Grid>

          <Grid item xs={4}>
            <TextField size={'small'} id="cnae" label="CNAE"
              type="text" value={cnae} variant="outlined" fullWidth
              onChange={e => setCnae(e.target.value)} />
          </Grid>

          <Grid item xs={6}>
            <TextField size={'small'} id="address" label="Endereço"
              type="text" value={address} variant="outlined" fullWidth
              onChange={e => setAddress(e.target.value)} />
          </Grid>

          <Grid item xs={3}>
            <TextField size={'small'} id="city" label="Cidade"
              type="text" value={city} variant="outlined" fullWidth 
              onChange={e => setCity(e.target.value)}/>
          </Grid>

          <Grid item xs={3}>
            <TextField size={'small'} id="zipCode" label="CEP"
              type="text" value={zipCode} variant="outlined" fullWidth 
              onChange={e => setZipCode(e.target.value)}/>
          </Grid>

          <Grid item xs={4}>
            <TextField size={'small'} id="employees" label="Numero de Funcionarios"
              type="text" value={employees} variant="outlined" fullWidth 
              onChange={e => setEmployees(e.target.value)}/>
          </Grid>

          <Grid item xs={4}>
            <TextField size={'small'} id="sectors" label="Numero de Setores"
              type="text" value={sectors} variant="outlined" fullWidth 
              onChange={e => setSectors(e.target.value)}/>
          </Grid>

          <Grid item xs={4}>
            <TextField size={'small'} id="positions" label="Numero de Cargos"
              type="text" value={positions} variant="outlined" fullWidth 
              onChange={e => setPositions(e.target.value)}/>
          </Grid>

          <Grid item xs={6}>
            <TextField size={'small'} id="managerName" label="Nome do Responsavel"
              type="text" value={managerName} variant="outlined" fullWidth 
              onChange={e => setManagerName(e.target.value)}/>
          </Grid>

          <Grid item xs={6}>
            <TextField size={'small'} id="contactName" label="Nome do Contato"
              type="text" value={contactName} variant="outlined" fullWidth 
              onChange={e => setContactName(e.target.value)}/>
          </Grid>

          <Grid item xs={6}>
            <TextField size={'small'} id="managerEmail" label="Email do Responsavel"
              type="text" value={managerEmail} variant="outlined" fullWidth 
              onChange={e => setManagerEmail(e.target.value)}/>
          </Grid>

          <Grid item xs={6}>
            <TextField size={'small'} id="contactEmail" label="Email do Contato"
              type="text" value={contactEmail} variant="outlined" fullWidth 
              onChange={e => setContactEmail(e.target.value)}/>
          </Grid>

          <Grid item xs={6}>
            <TextField size={'small'} id="managerPhone" label="Telefone do Responsavel"
              type="text" value={managerPhone} variant="outlined" fullWidth 
              onChange={e => setManagerPhone(e.target.value)}/>
          </Grid>

          <Grid item xs={6}>
            <TextField size={'small'} id="contactPhone" label="Telefone do Contato"
              type="text" value={contactPhone} variant="outlined" fullWidth 
              onChange={e => setContactPhone(e.target.value)}/>
          </Grid>

        </Grid>

      </DialogContent>
      <DialogActions>
        <Button color="primary">Cancelar</Button>
        <Button color="primary">Proximo</Button>
      </DialogActions>
    </>
  );
}
