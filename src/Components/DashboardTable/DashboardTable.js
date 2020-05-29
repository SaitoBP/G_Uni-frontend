// Libs
import React from 'react';

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>N° OS</th>
                <th>Razão Social</th>
                <th>OS</th>
                <th>PPRA</th>
                <th>PCMSO</th>
            </tr>
        </thead>
    );
}

const TableBody = () => {



    return(
        
    );
}

class DashboardTable extends React.Component {
    render() {
        return (
            <table>
                <TableHead />
                <tr>
                    <td>003</td>
                    <td>Safework SST</td>
                    <td>Em Andamento</td>
                    <td>Finalizado</td>
                    <td>Em Andamento</td>
                </tr>
                <tbody>

                </tbody>
            </table>
        );
    }
}

export default DashboardTable;