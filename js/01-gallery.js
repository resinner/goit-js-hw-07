import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const paletteContainer = document.querySelector(".gallery");
const cardsMarkap = createImageCardsMarkup(galleryItems);

paletteContainer.insertAdjacentHTML("beforeend", cardsMarkap);

paletteContainer.addEventListener("click", onPaletteContainerClick);

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

function onPaletteContainerClick(e) {
const isImageEl = e.target.classList.contains("gallery__image");
  if (!isImageEl) {
    return;
  }
  console.log(e.target.dataset.source);
}

