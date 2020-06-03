// Autenticação:
import { getToken } from '../Authentication/Auth';

const header = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + getToken()
}

const ApiService = {

    listOs: () => {
        return fetch("http://localhost:8080/os", { headers: header })
            .then(response => response.json());
    }

}

export default ApiService;