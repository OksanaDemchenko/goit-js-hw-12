import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const loadMoreText = document.createElement('div');
loadMoreText.classList.add('load-more-text');
loadMoreText.textContent = 'Images are loading, please wait...';
loadMoreText.style.display = 'none';
loadMoreText.style.textAlign = 'center';
loadMoreText.style.marginTop = '8px';
if (loadMoreBtn) loadMoreBtn.insertAdjacentElement('afterend', loadMoreText);

export function createGallery(images) {
  if (!gallery) return;

  const markup = images
    .map(
      image => `
      <li class="gallery-item">
        <a href="${image.largeImageURL}">
          <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy"/>
        </a>
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
      </li>
    `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  refreshLightbox();
}

export function clearGallery() {
  if (gallery) gallery.innerHTML = '';
}

export function showLoader() {
  if (!loader) return;
  loader.textContent = 'Images are loading, please wait...';
  loader.classList.add('active');
}

export function hideLoader() {
  if (!loader) return;
  loader.textContent = '';
  loader.classList.remove('active');
}

export function showLoadMoreButton() {
  if (!loadMoreBtn) return;
  loadMoreBtn.style.display = 'block';
}

export function hideLoadMoreButton() {
  if (!loadMoreBtn) return;
  loadMoreBtn.style.display = 'none';
}

export function showLoadMoreLoading() {
  if (loadMoreBtn) loadMoreBtn.style.display = 'none';
  if (loadMoreText) loadMoreText.style.display = 'block';
}

export function hideLoadMoreLoading() {
  if (loadMoreBtn) loadMoreBtn.style.display = 'block';
  if (loadMoreText) loadMoreText.style.display = 'none';
}


export function refreshLightbox() {
  if (lightbox) lightbox.refresh();
}
