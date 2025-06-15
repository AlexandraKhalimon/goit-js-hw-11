import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export function createGallery(images) {
    return images.map(({ largeImageURL, webformatURL, tags, likes, views, comments, downloads }) => 
        `<li class="list-item">
            <div class="card">
                <a class="card-link" href="${largeImageURL}">
                    <img class="card-img" src="${webformatURL}" alt="${tags}" />
                </a>
                    <div class="card-info">
                        <ul class="card-list">
                            <li class="card-list-info">
                                <h2 class="card-info-title">Likes</h2>
                                <p class="card-info-text">${likes}</p>
                            </li>
                            <li class="card-list-info">
                                <h2 class="card-info-title">Views</h2>
                                <p class="card-info-text">${views}</p>
                            </li>
                            <li class="card-list-info">
                                <h2 class="card-info-title">Comments</h2>
                                <p class="card-info-text">${comments}</p>
                            </li>
                            <li class="card-list-info">
                                <h2 class="card-info-title">Downloads</h2>
                                <p class="card-info-text">${downloads}</p>
                            </li>
                        </ul>
                    </div>
            </div>
        </li>`
    ).join("");
}

const galleryModal = new SimpleLightbox(`.gallery a`, {
    captionsData: "alt",
    captionsDelay: 250
});

galleryModal.refresh();

function clearGallery() {
    
}