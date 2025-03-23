import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

export const lightbox = new SimpleLightbox(".gallery-link", {
    captionsData: "alt",
    
});

export default function renderImages(images) {
    if (images === undefined || images.length === 0) {
        return;
    } else {
        const markup = images
        .map((image) => {
            return `
                <li class="gallery-item">
                    <a class="gallery-link" href="${image.largeImageURL}">
                        <img           
                            class="gallery-image"
                            src="${image.webformatURL}"
                            alt="${image.tags}"                   
                        />
                    </a>
                    <div class="card">
                        <div class="card-item">
                            <h3 class="card-name">Likes</h3>
                            <p class="card-number">${image.likes}</p>
                        </div>
                        <div class="card-item">
                            <h3 class="card-name">Views</h3>
                            <p class="card-number">${image.views}</p>
                        </div>
                        <div class="card-item">
                            <h3 class="card-name">Comments</h3>
                            <p class="card-number">${image.comments}</p>
                        </div>
                        <div class="card-item">
                            <h3 class="card-name">Downloads</h3>
                            <p class="card-number">${image.downloads}</p>
                        </div>
                    </div>
                </li>
            `
            })
        .join("");
    gallery.insertAdjacentHTML("beforeend", markup);
    lightbox.refresh();
    }
    }

    

