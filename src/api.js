import axios from 'axios';

const api_cartola = axios.create({

    baseURL: 'https://api.cartolafc.globo.com/time/id/'
});

export default api_cartola;
