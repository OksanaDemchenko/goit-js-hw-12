import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');
const loader = document.querySelector('.loader'); 

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
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  loader.textContent = 'Loading images, please wait...';
  loader.classList.add('active');
}

export function hideLoader() {
  loader.textContent = '';
  loader.classList.remove('active');
}

export function showLoadMoreButton() {
  loadMoreBtn.style.display = 'inline-block';
}

export function hideLoadMoreButton() {
  loadMoreBtn.style.display = 'none';
}
