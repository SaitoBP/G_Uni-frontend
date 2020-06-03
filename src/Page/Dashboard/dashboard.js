// React:
import React, { Fragment } from 'react';

// ApiService:
import ApiService from '../../Services/Api/ApiService';

// Componentes:
import DashboardTable from '../../Components/DashboardTable/DashboardTable';
import OsForm from '../../Components/OsForm/OsForm';

class Dashboard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      os: []
    }
  }

  deleteOs = index => {

    const { os } = this.state;

    this.setState(
      {
        os: os.filter((os, pos) => {
          console.log(index, pos);
          return index !== pos;
        }),
      }
    );
  }

  submitHandler = os => {
    this.setState({ os: [...this.state.os, os] })
  }

  componentDidMount() {

    ApiService.listOs()
      .then(response => {
        this.setState({os: [...this.state.os, ...response.content]})
      })

  }

  render() {

    ApiService.listOs()
      .then(response => console.log(response.content));

    return (
      <Fragment>
        <div className="container">
          <DashboardTable os={this.state.os} deleteOs={this.deleteOs} />
          {/* <OsForm submitHandler={this.submitHandler} /> */}
        </div>
      </Fragment>
    );
  }
}

export default Dashboard;