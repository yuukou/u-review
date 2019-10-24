import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://firestore.googleapis.com/v1/projects/new-u-revuiew-6d9f9/databases/(default)/documents/'
});

export default instance;
