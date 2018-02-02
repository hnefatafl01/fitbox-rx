import axios from 'axios';
const ROOT_URL = process.env.REACT_APP_API_URL;
export const FETCH_CLIENTS = "FETCH_CLIENTS";
export const FETCH_CLIENT = "FETCH_CLIENT";
export const CREATE_CLIENT = "CREATE_CLIENT";
export const DELETE_CLIENT = "DELETE_CLIENT";

export function fetchClients() {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTZjZmRjOWI0YjljZjAwMTQ5ZmY5MDkiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTE3NTk3MDk5fQ.Q0H9qfTYbMM7jKok26jx5d7vXE2anjWOIkFGvICXbls";
    const request = axios.get(`${ROOT_URL}/clients`, { headers: { "x-auth": token}});
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

export function createClient(values, callback) {
    const request = axios.post(`${ROOT_URL}/clients`, values)
        .then(() => callback());
    return {
        type: CREATE_CLIENT,
        payload: request
    }
}

export function deleteClient(id, callback) {
    const request = axios.delete(`${ROOT_URL}/clients/${id}/delete`)
        .then(() => callback());
    return {
        type: DELETE_CLIENT,
        payload: request
    }
}