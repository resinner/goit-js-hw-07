import { galleryItems } from './gallery-items.js';
// Change code below this line

const imagesContainer = document.querySelector(".gallery");
const cardsMarkap = createImageCardsMarkup(galleryItems);
let modalWindow;

imagesContainer.insertAdjacentHTML("beforeend", cardsMarkap);
imagesContainer.addEventListener("click", onImagesContainerClick);

function createImageCardsMarkup(galleryItems) {
  return galleryItems.map(({preview, original, description}) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  }).join(``);
}

function onImagesContainerClick(e) {
e.preventDefault();
const isImageEl = e.target.classList.contains("gallery__image");
  if (!isImageEl) {
    return;
  }

    const instance = basicLightbox.create(`
    <div class="modal">
        <img src = "${e.target.dataset.source}" width="800" height="600">
    </div>
`);
    instance.show();

    window.addEventListener('keydown', onEskKeyPress);
    function onEskKeyPress(e) {
        const ESK_KEY_CODE = 'Escape';
    
        if (e.code === ESK_KEY_CODE) {
             window.removeEventListener("keydown", onEskKeyPress);
          instance.close();
        }
    }
}