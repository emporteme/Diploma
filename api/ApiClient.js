// Main imports for API calls and tokens (jwt?)
import axios from 'axios';
import Cookie from 'js-cookie';

// Main Settings
export const serverUrl = "https://danialsk.pythonanywhere.com";

const ApiClient = axios.create({
    baseURL: serverUrl,
    headers: {
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*',
    },
});

ApiClient.interceptors.request.use(config => {
    const token = Cookie.get('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Basic API links
const unikUrl = '/django_api/universities';
const newsUrl = '/django_api/news'
const professionsUrl = '/django_api/professions'
const specialtiesUrl = '/django_api/specialties'

// API functions
ApiClient.getUnik = async () => {
    const response = await ApiClient.get(unikUrl);
    return response.data;
};

ApiClient.getNews = async () => {
    const response = await ApiClient.get(newsUrl)
    return response.data;
}

ApiClient.getProfessions = async () => {
    const response = await ApiClient.get(professionsUrl)
    return response.data;
}

ApiClient.getSpecialties = async () => {
    const response = await ApiClient.get(specialtiesUrl)
    return response.data;
}

export default ApiClient;
