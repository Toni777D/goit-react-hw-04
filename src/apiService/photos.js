import axios from 'axios';
const API_KEY = '-QddS-n0eezRam9JSXHG4eHU9X6gieVc1YDLIU7t5N4';
axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
    per_page: 15,
    orientation: 'landscape',
    urls: {
        small: '',
        regular: ''
    }
}

export const getPhotos = async (query, page) =>{
    const { data } = await axios.get(`search?query=${query}&page=${page}`);
    return data;
}