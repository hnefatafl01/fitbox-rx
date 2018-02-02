import axios from 'axios';
const ROOT_URL = process.env.REACT_APP_API_URL;
export const FETCH_CLIENTS = "FETCH_CLIENTS";
export const FETCH_CLIENT = "FETCH_CLIENT";
export const CREATE_CLIENT = "CREATE_CLIENT";
export const DELETE_CLIENT = "DELETE_CLIENT";

export function fetchClients() {
    const token = localStorage.getItem("x-auth");
    const request = axios.get(`${ROOT_URL}/clients`, { headers: { "x-auth": token}});
    return {
        type: FETCH_CLIENTS,
        payload: request
    }
}

export function fetchClient(id) {
    const token = localStorage.getItem("x-auth");
    const request = axios.get(`${ROOT_URL}/clients/${id}`, { headers: { "x-auth": token}});
    return {
        type: FETCH_CLIENT,
        payload: request
    }
}

export function createClient(values, callback) {
    const token = localStorage.getItem("x-auth");
    const request = axios.post(`${ROOT_URL}/clients`, values, { headers: { "x-auth": token}})
        .then(() => callback());
    return {
        type: CREATE_CLIENT,
        payload: request
    }
}

export function deleteClient(id, callback) {
    const token = localStorage.getItem("x-auth");
    const request = axios.delete(`${ROOT_URL}/clients/${id}/delete`, { headers: { "x-auth": token}})
        .then(() => callback());
    return {
        type: DELETE_CLIENT,
        payload: request
    }
}