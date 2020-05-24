import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID JW9GW63-xjFAe-gB-7rgc9Ty4nBrpN5WGVKTCNk4JvE'
    }
});