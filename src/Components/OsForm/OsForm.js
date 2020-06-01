// Libs
import React from 'react';

class OsForm extends React.Component {

    constructor(props) {
        super(props);

        this.startState = {
            osNumber: '',
            companyName: '',
            osStatus: '',
            ppraStatus: '',
            pcmsoStatus: '',
        }

        this.state = this.startState;
    }

    inputHandler = event => {
        const {name, value} = event.target;

        this.setState({
            [name] : value
        })
    }

    submitForm = () => {
        this.props.submitHandler(this.state);
        this.setState(this.startState);
    }

    render() {

        const {osNumber, companyName, osStatus, ppraStatus, pcmsoStatus} = this.state;

        return(
            <form>
                <label htmlFor="osNumber">Numero da OS</label>
                <input type="text" name="osNumber" id="osNumber" value={osNumber} onChange={this.inputHandler}/>

                <label htmlFor="companyName">Razão Social</label>
                <input type="text" name="companyName" id="companyName" value={companyName} onChange={this.inputHandler}/>

                <label htmlFor="osStatus">OS Status</label>
                <input type="text" name="osStatus" id="osStatus" value={osStatus} onChange={this.inputHandler}/>

                <label htmlFor="ppraStatus">PPRA Status</label>
                <input type="text" name="ppraStatus" id="ppraStatus" value={ppraStatus} onChange={this.inputHandler}/>

                <label htmlFor="pcmsoStatus">PCMSO Status</label>
                <input type="text" name="pcmsoStatus" id="pcmsoStatus" value={pcmsoStatus} onChange={this.inputHandler}/>

                <button type="button" onClick={this.submitForm}>Salvar</button>
            </form>
        );
    }
}

export default OsForm;