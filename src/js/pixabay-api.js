import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import iconError from '../img/error.png';

const formInput = document.querySelector('.form-input');
const perPage = 15;

export default async function axiosGet(inputValue, page) {
    try {
        const response = await axios.get('https://pixabay.com/api/', {
            params: {
                key: '49360520-b72380be0a18495ea370d4b42',
                q: inputValue,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: 'true',
                page: page,
                per_page: perPage,
            },
        });
        if (response.data.hits.length === 0) {
            iziToast.show({
                message:
                    'Sorry, there are no images matching your search query. Please try again!',
                backgroundColor: '#ef4040',
                messageColor: 'white',
                position: 'topRight',
                transitionIn: 'fadeIn',
                iconUrl: iconError,
                maxWidth: '432px',
            });
            return { totalPages: 0, hits: [] };
        }

        const totalHits = parseInt(response.data.totalHits);
        const totalPages = Math.ceil(totalHits / perPage);

        return {
            totalPages: totalPages,
            hits: response.data.hits,
        };
    } catch (error) {
        iziToast.show({
            message: `An unexpected error occurred: ${error.message || error}`,
            backgroundColor: '#ef4040',
            messageColor: 'white',
            position: 'topRight',
            transitionIn: 'fadeIn',
            iconUrl: iconError,
        });
        return { totalPages: 0, hits: [] };
    }
}
