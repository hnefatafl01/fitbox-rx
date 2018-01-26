// import axios from 'axios';

// const ROOT_URL = 'https://localhost:3000';
export const FETCH_CLIENTS = "FETCH_CLIENTS";

export function fetchClients() {
    // const request = axios.get(`${ROOT_URL}/dashboard`);
    const dummy = [
        { _id: '12asdf34f1', name: 'Rufus Wooferton' },
        { _id: '1234sdf234', name: 'Denali Queen Bee' },
        { _id: '1kljdsff34', name: 'Stewart Chicken' },
        { _id: 'a55v3sd32f', name: 'Bridger UpsideDownDog' }
    ];

    const req = new Promise((resolve, reject) => {
        setInterval(() => {
            resolve(dummy);
        }, 500)
        if (!dummy) {
            reject();
        }
    }).then((clients) => {
        return clients
    });

    return {
        type: FETCH_CLIENTS,
        payload: req
    }
}