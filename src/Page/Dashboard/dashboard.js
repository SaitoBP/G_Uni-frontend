// Libs
import React from 'react';

// Componentes
import DashboardTable from '../../Components/DashboardTable/DashboardTable';

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

        const {os} = this.state;

        this.setState(
            {
                os : os.filter((os, pos) => {
                    console.log(index, pos);
                    return index !== pos;
                }),
            }
        );
    }

    render() {
        return (
            <DashboardTable os={this.state.os} deleteOs={this.deleteOs}/>
        );
    }
}

export default Dashboard;