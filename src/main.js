import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, lightboxModal, clearGallery, showLoader, hideLoader } from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const searchForm = document.querySelector(".form");
const searchInput = document.querySelector("input");
const searchBtn = document.querySelector("button");
const galleryList = document.querySelector(".gallery");

searchForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const query = searchInput.value.trim();

    showLoader();
    clearGallery();

    getImagesByQuery(query)
        .then(response => {
            if (response.hits.length === 0) {
                return iziToast.show({
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    color: "red",
                    position: "topRight"
                })
            }
            galleryList.innerHTML = (createGallery(response.hits));
            lightboxModal();
            hideLoader();
            
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            hideLoader();
        });
}
