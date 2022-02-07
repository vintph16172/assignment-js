import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        "Content-Type": "application/json"
    }
});
// https://5e79b4b817314d00161333da.mockapi.io
export default instance;