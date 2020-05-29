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
                <th>REMOVER</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {

    const rows = props.os.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.osNumber}</td>
                <td>{row.companyName}</td>
                <td>{row.osStatus}</td>
                <td>{row.ppraStatus}</td>
                <td>{row.pcmsoStatus}</td>
                <td><button onClick = {
                    () => {
                        props.deleteOs(index);
                    }
                }>Remover</button></td>
            </tr>
        );
    });

    return (
        <tbody>
            {rows}
        </tbody>
    );
}

class DashboardTable extends React.Component {
    render() {

        const { os, deleteOs } = this.props;

        return (
            <table>
                <TableHead />
                <TableBody os={os} deleteOs={deleteOs}/>
            </table>
        );
    }
}

export default DashboardTable;