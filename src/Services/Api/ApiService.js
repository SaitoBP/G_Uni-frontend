// Autenticação:
import { getToken } from '../Authentication/Auth';

export const tokenHeader = {
    'Content-Type': 'application/json',
    'Authorization': getToken()
}

const api = {

    auth: async (email, password) => {

        let options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email, password: password })
        }

        const response = await fetch('http://localhost:8080/auth', options);
        const data = await response.json();
        return data.token;
    },

    getOsByUo: async (uo) => {

        let options = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'Authorization': getToken() }
        }

        // Remove acentos, troca espaço por '_' e deixa em caixa alta
        let uoLink = uo.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(' ', '_').toUpperCase();

        const response = await fetch(`http://localhost:8080/os?uo=${uoLink}`, options)
        const data = await response.json();
        return data.content;
    },

    verifyCnpj: async (cnpj) => {

        let options = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'Authorization': getToken() }
        }

        const response = await fetch(`http://localhost:8080/company/cnpj:${cnpj}`, options);
        const data = await response.json();
        return data;
    }
}

export default api;