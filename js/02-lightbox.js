import { galleryItems } from './gallery-items.js';
// Change code below this line

const imagesContainer = document.querySelector(".gallery");
const cardsMarkap = createImageCardsMarkup(galleryItems);

imagesContainer.insertAdjacentHTML("beforeend", cardsMarkap);

function createImageCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`
    })
    .join(``);
}

let gallery = new SimpleLightbox(".gallery a", {
  captions: true,
  captionDelay: 250,
  captionSelector: "img",
  captionPosition: "bottom",
  captionsData: "alt",
});
gallery.on("show.simplelightbox", function(e) {
});