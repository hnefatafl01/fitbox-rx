import axios from 'axios';

const ROOT_URL = process.env.REACT_APP_API_URL;
export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";

export function signup(values, callback) {
    axios.post(`${ROOT_URL}/user/signup`, values)
        .then((res) => {
            let token = res.headers['x-auth'];
            sessionStorage.setItem('x-auth', token);
            callback();
        });

    return {
        type: SIGNUP,
        payload: "signup payload"
    }
}

export async function login(values, callback) {
    let r = await axios.post(`${ROOT_URL}/user/login`, values);
    let token = r.headers['x-auth'];
    let userdata = {
        user: {
            data: r.data,
            authenticated: true,
            token: token
        }
    }
    sessionStorage.setItem('x-auth', token);
    callback();

    return {
        type: LOGIN,
        payload: userdata
    }
}
