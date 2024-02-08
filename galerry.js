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
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const gallery = document.querySelector(".gallery");

const markup = images.reduce(
  (gallery, image) =>
    gallery +
    `<li class='gallery-item'> <img src="${image.preview}" data-source="${image.original}" alt="${image.description}"></li>`,
  ""
);

gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener("click", imgClick);

function imgClick(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const imgSourse = event.target.dataset.source;
  const imgDescription = event.target.alt;
  const modalImage = `<img src="${imgSourse}" alt="${imgDescription}" width="1280" height="640"></img> `;

  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = modalImage;
  document.body.appendChild(modal);
}

/* const imgClick = event.target.dataset.original;
output.innerHTML = `<img scr="${imgClick}" alt="${description}"></img>`;
} */
/*  закривання вікна let modalWindow = '';
 gallerys.addEventListener('click', (event) => {
     if (event.target.classList.contains('gallery-image')) {
         event.preventDefault();
         const dataSource = event.target.getAttribute('data-source');
         const description = event.target.getAttribute('alt');
         modalWindow = basicLightbox.create(`<div class="modalWindow">
                                                 <img
                                                   src="${dataSource}"
                                                   alt="${description}"
                                                   width="1112"
                                                   height="640"
                                                 >
                                             </div>`);
         modalWindow.show();
     };
 })
 document.addEventListener("keydown", (event) => {
     if (event.code === "Escape") {
         modalWindow.close();
     }
 }); */
