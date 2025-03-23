import axiosGet from './js/pixabay-api';
import renderImages from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import iconError from './img/error.png';
import hello from './img/hello.png';
import caution from './img/caution.png';

const formInput = document.querySelector('.form-input');
const formBtn = document.querySelector('.form-btn');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const galleryBtn = document.querySelector('.gallery-btn');

let page = 1;
let inputValue = '';

galleryBtn.addEventListener('click', nextBtn);

formBtn.addEventListener('click', async e => {
    e.preventDefault();
    gallery.innerHTML = '';
    page = 1;
    inputValue = formInput.value.trim();
    galleryBtn.classList.add('hidden');
    if (!inputValue) {
        iziToast.show({
            message: 'Please enter a search query!',
            backgroundColor: '#ffa000',
            messageColor: 'white',
            position: 'topRight',
            transitionIn: 'fadeIn',
            maxWidth: '432px',
            iconUrl: caution,
        });
        return;
    }

    loader.classList.remove('hidden');

    try {
        const response = await axiosGet(inputValue, page);
        if (response.totalPages === 0) {
            return;
        }
        if (response.totalPages > page) {
            renderImages(response.hits);
            galleryBtn.classList.remove('hidden');
        }
    } catch (error) {
        iziToast.show({
            message: `An unexpected error occurred: ${error.message || error}`,
            backgroundColor: '#ef4040',
            messageColor: 'white',
            position: 'topRight',
            transitionIn: 'fadeIn',
            iconUrl: iconError,
        });
    } finally {
        loader.classList.add('hidden');
    }
});

async function nextBtn() {
    if (inputValue === '') {
        iziToast.show({
            message: `An unexpected error occurred: ${error.message || error}`,
            backgroundColor: '#ef4040',
            messageColor: 'white',
            position: 'topRight',
            transitionIn: 'fadeIn',
            iconUrl: iconError,
        });
        return;
    }
    loader.classList.remove('hidden');
    window.scrollBy({
        top: 100,
        behavior: 'smooth',
    });
    galleryBtn.classList.add('hidden');
    page += 1;
    const nextPageResponse = await axiosGet(inputValue, page);
    renderImages(nextPageResponse.hits);
    loader.classList.add('hidden');
    galleryBtn.classList.remove('hidden');
    scroll();
    if (page >= nextPageResponse.totalPages) {
        galleryBtn.classList.add('hidden');
        iziToast.show({
            message:
                "We're sorry, but you've reached the end of search results.",
            backgroundColor: '#09f',
            messageColor: 'white',
            position: 'topRight',
            transitionIn: 'fadeIn',
            iconUrl: hello,
        });
    }
}

function scroll() {
    const galleryItem = document.querySelector('.gallery-item');
    const galleryItemRect = galleryItem.getBoundingClientRect();
    window.scrollBy({
        top: 2 * galleryItemRect.height,
        behavior: 'smooth',
    });
}
