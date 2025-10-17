import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const controls = document.querySelector('.controls');
const loader = controls.querySelector('.loader');
const loadMoreBtn = controls.querySelector('.load-more');

export const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: () => '',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      image => `
      <li class="gallery-item">
        <a href="${image.largeImageURL}">
          <img src="${image.webformatURL}" alt="" loading="lazy">

          <div class="gallery-categories">
            <span>Likes</span>
            <span>Views</span>
            <span>Comments</span>
            <span>Downloads</span>
          </div>

          <div class="gallery-stats">
            <span>${image.likes}</span>
            <span>${image.views}</span>
            <span>${image.comments}</span>
            <span>${image.downloads}</span>
          </div>
        </a>
      </li>
    `
    )
    .join('');


  galleryContainer.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh(); 
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  loader.textContent = 'Loading images, please wait...';
  loader.style.display = 'block';
}

export function hideLoader() {
  loader.textContent = '';
  loader.style.display = 'none';
}

export function showLoadMoreButton() {
  loadMoreBtn.style.display = 'inline-block';
}

export function hideLoadMoreButton() {
  loadMoreBtn.style.display = 'none';
}
