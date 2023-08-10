import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  galleryLIst: document.querySelector(".gallery"),
  basicLightbox: document.querySelector(".basicLightbox"),
};

const markup = galleryItems
  .map((item) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`;
  })
  .join("");

refs.galleryLIst.insertAdjacentHTML("afterbegin", markup);

refs.galleryLIst.addEventListener("click", onGalleryListClick);

function onGalleryListClick(event) {
  event.preventDefault();
    
  const instance = basicLightbox.create(`
		<img width="1400" height="900" src=${event.target.dataset.source}>
	`);

  if(event.target.nodeName === "IMG"){
  instance.show()};

  document.addEventListener("keydown", onKeyDown);

  function onKeyDown(event) {
    if (event.key === "Escape") {
      instance.close();
      document.removeEventListener("keydown", onKeyDown);
    }
  }
}
