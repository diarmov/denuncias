import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
		'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Content-Type': 'multipart/form-data',
    }
});

api.interceptors.request.use( config => {
    const token = localStorage.getItem('token');
    config.headers = {
        ...config.headers,
        'Authorization': `Bearer${token}`
    }

    return config;
})


export default api;