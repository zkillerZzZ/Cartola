import axios from 'axios';

const api_cartola = axios.create({

    baseURL: 'https://cors-anywhere.herokuapp.com//https://api.cartolafc.globo.com/time/id/'
});

export default api_cartola;
