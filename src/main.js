import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
  lightbox, 
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more');

let query = '';
let page = 1;
const per_page = 15;
let totalHits = 0;

form.addEventListener('submit', async e => {
  e.preventDefault();
  query = form.elements['search-text'].value.trim();
  if (!query) {
    iziToast.warning({
      title: 'Empty request',
      message: 'Please enter a search term.',
    });
    return;
  }

  clearGallery();
  page = 1;
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(query, page, per_page);
    hideLoader();

    if (data.hits.length === 0) {
      iziToast.warning({
        title: 'No results',
        message: 'Sorry, no images found for your request.',
      });
      return;
    }

    createGallery(data.hits);
    totalHits = data.totalHits;

    if (page * per_page < totalHits) {
      showLoadMoreButton();
    } else {
      iziToast.info({
        title: 'End of results',
        message: "You've reached the end of search results.",
        position: 'bottomLeft',
        timeout: 5000,
        close: true,
      });
    }
  } catch (error) {
    hideLoader();
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
    });
  }
});

loadMoreBtn.addEventListener('click', async () => {
  page += 1;
  showLoader();

  try {
    const data = await getImagesByQuery(query, page, per_page);
    hideLoader();
    createGallery(data.hits);

    const { height: cardHeight } = document
      .querySelector('.gallery')
      .firstElementChild.getBoundingClientRect();
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });

    if (page * per_page >= totalHits) {
      hideLoadMoreButton();
      iziToast.info({
        title: 'End of results',
        message: "You've reached the end of search results.",
        position: 'bottomLeft',
        timeout: 5000,
        close: true,
      });
    }
  } catch (error) {
    hideLoader();
    iziToast.error({
      title: 'Error',
      message: 'Failed to load more images.',
    });
  }
});
