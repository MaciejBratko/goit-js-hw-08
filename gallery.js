document.addEventListener("DOMContentLoaded", () => {
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

  const gallery = document.querySelector("ul.gallery");
  gallery.innerHTML = images
    .map(
      ({ preview, original, description }) => `
<li class="gallery-item">
<a class="gallery-link" href="${original}">
<img class="gallery-image" src="${preview}" data-source="${original}" alt="${description}" />
</a>
</li>`
    )
    .join("");

  gallery.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") return;
    const lightboxInstance = basicLightbox.create(`
<img width="1400" height="900" src="${event.target.dataset.source}">
`);
    lightboxInstance.show();
    const onKeyPress = (event) => {
      if (event.key === "Escape") {
        lightboxInstance.close();
        document.removeEventListener("keydown", onKeyPress);
      }
    };
    document.addEventListener("keydown", onKeyPress);
  });
});
