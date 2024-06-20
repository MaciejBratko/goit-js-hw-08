const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  // Pozostałe obiekty obrazów...
];

// generowanie galerii
const galleryItems = images
  .map(
    ({ preview, original, description }) => `<li class="gallery-item">
  <a class="gallery-link" href="${original}">
    <img
      class="gallery-image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
`
  )
  .join("");

const gallery = document.querySelector("ul.gallery");
gallery.innerHTML = galleryItems;

//blokowanie domyślnego zachowania kliknięcia w obrazek
document.addEventListener("click", handleClick);

function handleClick(event) {
  event.preventDefault();
}

//dodawanie i usuwanie instancji lightboxa
gallery.addEventListener("click", imageClick);
let lightboxInstance;
function imageClick(event) {
  if (event.target && event.target.tagName === "IMG") {
    const sourceImage = event.target.dataset.source;
    console.log(sourceImage);
    lightboxInstance = basicLightbox.create(`
<img width="1400" height="900" src="${sourceImage}">
`);
    lightboxInstance.show();
    document.addEventListener("keydown", onKeyPress);
  }
}
function onKeyPress(event) {
  if (event.key === "Escape" || event.key === "Esc") {
    lightboxInstance.close();
    document.removeEventListener("keydown", onKeyPress);
  }
}
