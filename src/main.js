import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const searchForm = document.querySelector(".form");
const searchInput = document.querySelector("input");

searchForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const query = searchInput.value.trim();

    if (!query) {
        iziToast.warning({
            message: "Sorry, fill in the search query to start work.",
            position: "topRight"
        });
        return;
    }

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
            };

            createGallery(response.hits);
        })
        .catch(error => {
            console.log(error.message);
            iziToast.error({
                message: `Error:${error.message}`,
                color: "red",
                position: "topRight"
            });
        })
        .finally(() => {
            hideLoader();
        });
}
