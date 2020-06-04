// Autenticação:
import { getToken } from '../Authentication/Auth';

export const tokenHeader = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + getToken()
}