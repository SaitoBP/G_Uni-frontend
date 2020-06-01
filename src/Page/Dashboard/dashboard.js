// Libs
import React, { Fragment } from 'react';

import 'materialize-css/dist/css/materialize.min.css'

// Componentes
import DashboardTable from '../../Components/DashboardTable/DashboardTable';
import OsForm from '../../Components/OsForm/OsForm';

class Dashboard extends React.Component {

    state = {
        os: [
            {
                "osNumber": "001",
                "companyName": "Empresa Teste 01",
                "osStatus": "Em Andamento",
                "ppraStatus": "Finalizado",
                "pcmsoStatus": "Em Andamento",
            },
            {
                "osNumber": "002",
                "companyName": "Empresa Teste 02",
                "osStatus": "Finalizado",
                "ppraStatus": "Finalizado",
                "pcmsoStatus": "Finalizado",
            },
            {
                "osNumber": "003",
                "companyName": "Empresa Teste 03",
                "osStatus": "Em Andamento",
                "ppraStatus": "Em Adamento",
                "pcmsoStatus": "Em Andamento",
            }
        ],
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

    render() {
        return (
            <Fragment>
                <h3>Foz do Iguaçu</h3>
                <div className="container">
                    <DashboardTable os={this.state.os} deleteOs={this.deleteOs} />
                    <OsForm submitHandler={this.submitHandler} />
                </div>
            </Fragment>
        );
    }
}

export default Dashboard;