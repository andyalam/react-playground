import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-22907.firebaseio.com'
});

export default instance;