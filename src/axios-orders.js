import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-7b775.firebaseio.com/'
});

export default instance;