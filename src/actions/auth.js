import axios from 'axios';
const ROOT_URL = process.env.REACT_APP_API_URL;
export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";

export function signup(values, callback) {
    const request = axios.post(`${ROOT_URL}/user/signup`, values)
        .then((res) => {
            console.log('res', res);
            callback();
        });

    return {
        type: SIGNUP,
        payload: request
    }
}

export function login(values, callback) {
    const request = axios.post(`${ROOT_URL}/user/login`, values)
        .then((res) => {
            console.log('login action res', res)
            // localStorage.setItem()
            callback();
        });
    return {
        type: SIGNUP,
        payload: request
    }
}