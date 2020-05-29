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

const TableBody = props => {

    const rows = props.os.map((row, index) => {
        return (
            <tr>
                <td>{row.osNumber}</td>
                <td>{row.companyName}</td>
                <td>{row.osStatus}</td>
                <td>{row.ppraStatus}</td>
                <td>{row.pcmsoStatus}</td>
            </tr>
        );
    });

    return (
        <tbody>
            {rowsf}
        </tbody>
    );
}

class DashboardTable extends React.Component {
    render() {

        const { os } = this.props;

        return (
            <table>
                <TableHead />
                <TableBody os={os} />
            </table>
        );
    }
}

export default DashboardTable;