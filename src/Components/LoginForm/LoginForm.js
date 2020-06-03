// React:
import React from 'react';

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
          <label htmlFor="email">Email</label>
          <input type="email"
            name="email"
            id="email"
            value={email}
            onChange={this.inputHandle} />

          <label htmlFor="password">Senha</label>
          <input type="password"
            name="password"
            id="password"
            value={password}
            onChange={this.inputHandle} />

          <button onClick={this.submitForm} type="button" className="waves-effect waves-light btn">Login</button>
        </form>
      )
    }
  }
}

export default withRouter(LoginForm);