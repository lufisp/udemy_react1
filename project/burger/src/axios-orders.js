import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-a0e09.firebaseio.com/'
});

export default instance;