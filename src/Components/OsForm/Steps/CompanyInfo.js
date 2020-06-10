// React:
import React from 'react';

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
  const { company, setCompany, prev, next } = props;

  return (
    <>
      <DialogTitle id="form-dialog-title">Cadastro da Empresa</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Preencha o formulario com as informações que faltam
        </DialogContentText>
        <form>


          <Grid container spacing={2}>

            <Grid item xs={12}>
              <TextField autoFocus size={'small'} id="companyName" label="Razão Social"
                type="text" value={company.companyName} variant="outlined" fullWidth
                onChange={e => setCompany({
                  ...company,
                  companyName: e.target.value
                })} name="companyName" />
            </Grid>

            <Grid item xs={8}>
              <TextField size={'small'} id="cnpj" label="CNPJ"
                type="text" value={company.cnpj} variant="outlined" fullWidth
                onChange={e => setCompany({
                  ...company,
                  cnpj: e.target.value
                })} name="cnpj" />
            </Grid>

            <Grid item xs={4}>
              <TextField size={'small'} id="cnae" label="CNAE"
                type="text" value={company.cnae} variant="outlined" fullWidth
                onChange={e => setCompany({
                  ...company,
                  cnae: e.target.value
                })} name="cnae" />
            </Grid>

            <Grid item xs={6}>
              <TextField size={'small'} id="address" label="Endereço"
                type="text" value={company.location.address} variant="outlined" fullWidth
                onChange={e => setCompany({
                  ...company,
                  location: {
                    ...company.location,
                    address: e.target.value
                  }
                })} name="address" />
            </Grid>

            <Grid item xs={3}>
              <TextField size={'small'} id="city" label="Cidade"
                type="text" value={company.location.city} variant="outlined" fullWidth
                onChange={e => setCompany({
                  ...company,
                  location: {
                    ...company.location,
                    city: e.target.value
                  }
                })} name="city" />
            </Grid>

            <Grid item xs={3}>
              <TextField size={'small'} id="zipCode" label="CEP"
                type="text" value={company.location.zipCode} variant="outlined" fullWidth
                onChange={e => setCompany({
                  ...company,
                  location: {
                    ...company.location,
                    zipCode: e.target.value
                  }
                })} name="zipCode" />
            </Grid>

            <Grid item xs={4}>
              <TextField size={'small'} id="employees" label="Numero de Funcionarios"
                type="text" value={company.information.employees} variant="outlined" fullWidth
                onChange={e => setCompany({
                  ...company,
                  information: {
                    ...company.information,
                    employees: e.target.value
                  }
                })} name="employees" />
            </Grid>

            <Grid item xs={4}>
              <TextField size={'small'} id="sectors" label="Numero de Setores"
                type="text" value={company.information.sectors} variant="outlined" fullWidth
                onChange={e => setCompany({
                  ...company,
                  information: {
                    ...company.information,
                    sectors: e.target.value
                  }
                })} name="sectors" />
            </Grid>

            <Grid item xs={4}>
              <TextField size={'small'} id="positions" label="Numero de Cargos"
                type="text" value={company.information.positions} variant="outlined" fullWidth
                onChange={e => setCompany({
                  ...company,
                  information: {
                    ...company.information,
                    positions: e.target.value
                  }
                })} name="positions" />
            </Grid>

            <Grid item xs={6}>
              <TextField size={'small'} id="managerName" label="Nome do Responsavel"
                type="text" value={company.information.contact.managerName} variant="outlined" fullWidth
                onChange={e => setCompany({
                  ...company,
                  information: {
                    ...company.information,
                    contact: {
                      ...company.information.contact,
                      managerName: e.target.value
                    }
                  }
                })} name="managerName" />
            </Grid>

            <Grid item xs={6}>
              <TextField size={'small'} id="contactName" label="Nome do Contato"
                type="text" value={company.information.contact.contactName} variant="outlined" fullWidth
                onChange={e => setCompany({
                  ...company,
                  information: {
                    ...company.information,
                    contact: {
                      ...company.information.contact,
                      contactName: e.target.value
                    }
                  }
                })} name="contactName" />
            </Grid>

            <Grid item xs={6}>
              <TextField size={'small'} id="managerEmail" label="Email do Responsavel"
                type="text" value={company.information.contact.managerEmail} variant="outlined" fullWidth
                onChange={e => setCompany({
                  ...company,
                  information: {
                    ...company.information,
                    contact: {
                      ...company.information.contact,
                      managerEmail: e.target.value
                    }
                  }
                })} name="managerEmail" />
            </Grid>

            <Grid item xs={6}>
              <TextField size={'small'} id="contactEmail" label="Email do Contato"
                type="text" value={company.information.contact.contactEmail} variant="outlined" fullWidth
                onChange={e => setCompany({
                  ...company,
                  information: {
                    ...company.information,
                    contact: {
                      ...company.information.contact,
                      contactEmail: e.target.value
                    }
                  }
                })} name="contactEmail" />
            </Grid>

            <Grid item xs={6}>
              <TextField size={'small'} id="managerPhone" label="Telefone do Responsavel"
                type="text" value={company.information.contact.managerPhone} variant="outlined" fullWidth
                onChange={e => setCompany({
                  ...company,
                  information: {
                    ...company.information,
                    contact: {
                      ...company.information.contact,
                      managerPhone: e.target.value
                    }
                  }
                })} name="managerPhone" />
            </Grid>

            <Grid item xs={6}>
              <TextField size={'small'} id="contactPhone" label="Telefone do Contato"
                type="text" value={company.information.contact.contactPhone} variant="outlined" fullWidth
                onChange={e => setCompany({
                  ...company,
                  information: {
                    ...company.information,
                    contact: {
                      ...company.information.contact,
                      contactPhone: e.target.value
                    }
                  }
                })} name="contactPhone" />
            </Grid>

          </Grid>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={prev} color="primary">Voltar</Button>
        <Button onClick={next} color="primary">Proximo</Button>
      </DialogActions>
    </>
  );
}
