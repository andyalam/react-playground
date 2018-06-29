import axios from 'axios';

const instance = axios.create({
    baseUrl: 'https://react-my-burger-22907.firebaseio.com'
});

export default instance;