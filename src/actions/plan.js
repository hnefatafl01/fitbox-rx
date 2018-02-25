// import axios from 'axios';
// const ROOT_URL = process.env.REACT_APP_API_URL;

export const CREATE_SESSION = "CREATE_SESSION";

export function createSession() {
  console.log("createSession")
  return {
      type: CREATE_SESSION,
      payload: 'request'
  }
}
