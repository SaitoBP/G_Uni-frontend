// Libs
import Validator from 'validator';

class FormValidator {

    constructor(validation) {
        this.validation = validation;
    }

    isValid(state) {
        const fieldValue = state[this.validation.field.toString()];
        const methodValidation = Validator[this.validation.method];
        console.log(fieldValue);
        
        if(methodValidation(fieldValue, [], state) === true) {
            console.log("FormValidator: Invalid!");
            return false;
        } else {
            console.log("FormValidator: Valid!");
            return true;
        }
    }
}

export default FormValidator;