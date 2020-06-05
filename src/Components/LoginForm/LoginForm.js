// React:
import React, { useState } from 'react';

// Material UI:
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

// Router:
import { useHistory } from 'react-router-dom';

import api from '../../Services/Api/ApiService';

// Main Component:
export default function LoginForm() {

  // States Hooks:
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // History Hook:
  const history = useHistory();

  const submitForm = async () => {

    api.auth(email, password)
      .then(response => {
        // Seta o token o armazenamento interno do browser:
        localStorage.setItem('TOKEN_KEY', `Bearer ${response}`)

        if (localStorage.getItem('TOKEN_KEY') !== 'Bearer undefined') {
          // Redireciona para a dashboard:
          history.push('/dashboard')
        }
      })
      .catch(error => {
        console.error(error)
      });
  }

  return (
    <Grid container spacing={2} direction="column" justify="center" alignItems="center" style={{ height: '90vh' }}>

      <Grid item>
        <TextField id="email" label="Email" variant="outlined"
          value={email} onChange={e => setEmail(e.target.value)} name="email" />
      </Grid>

      <Grid item>
        <TextField id="password" label="Senha" variant="outlined"
          value={password} onChange={e => setPassword(e.target.value)} name="password" />
      </Grid>

      <Grid item>
        <Button type="button" onClick={submitForm} variant="contained" color="primary">Login</Button>
      </Grid>

    </Grid>
  )
}