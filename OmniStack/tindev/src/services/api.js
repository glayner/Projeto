import axios from 'axios'

const api = axios.create({
    baseUrl: 'http://192.168.25.29:3333'
});
export default api;