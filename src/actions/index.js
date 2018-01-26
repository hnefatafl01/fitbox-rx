import axios from 'axios';
const ROOT_URL = 'http://localhost:5000';

export const FETCH_CLIENTS = "FETCH_CLIENTS";
export const FETCH_CLIENT = "FETCH_CLIENT";

export function fetchClients() {
    const request = axios.get(`${ROOT_URL}/clients`);
    return {
        type: FETCH_CLIENTS,
        payload: request
    }
}

export function fetchClient(id) {
    const request = axios.get(`${ROOT_URL}/clients/${id}`);
    return {
        type: FETCH_CLIENT,
        payload: request
    }
}