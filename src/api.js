import axios from 'axios';

const api = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://api.cartolafc.globo.com/time/id/'
});

export default api;