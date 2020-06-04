// React:
import React from 'react';

// Material UI:
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

// Router:
import { Redirect, withRouter } from 'react-router-dom';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);

    // Deixa o estado inicial do form vazio
    this.initialState = {
      email: '',
      password: '',
      redirect: false
    }

    this.state = this.initialState;

  }

  inputHandle = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  submitForm = () => {

    const options = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      }),
    }

    fetch('http://localhost:8080/auth', options)
      .then(response => response.json())
      .then(response => localStorage.setItem("TOKEN_KEY", (response.token)))

    // Zera o formulario
    this.setState(this.initialState);

    this.props.history.push("/dashboard")
  }

  render() {

    const { email, password } = this.state;

    if (this.state.redirect) {
      return <Redirect to={{ pathname: "/" }} />
    } else {
      return (
        <form method="post">
          <Grid container spacing={2} direction="column" justify="center" alignItems="center" style={{ height: '90vh' }}>

            <Grid item>
              <TextField id="email" label="Email" variant="outlined"
                value={email} onChange={this.inputHandle} name="email" />
            </Grid>

            <Grid item>
              <TextField id="password" label="Senha" variant="outlined"
                value={password} onChange={this.inputHandle} name="password" />
            </Grid>

            <Grid item>
              <Button onClick={this.submitForm} type="button" variant="contained" color="primary">
                Login
              </Button>
            </Grid>

          </Grid>
        </form>
      )
    }
  }
}

export default withRouter(LoginForm);