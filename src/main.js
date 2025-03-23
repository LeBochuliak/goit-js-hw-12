import axiosGet from "./js/pixabay-api";
import renderImages from "./js/render-functions";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import iconError from "./img/error.png";

const formInput = document.querySelector(".form-input");
const formBtn = document.querySelector(".form-btn");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

formBtn.addEventListener("click", (e) => {
    e.preventDefault();
    gallery.innerHTML = "";
    let inputValue = formInput.value.trim();
    if (!inputValue) {
        iziToast.show({
                    message: 'Please enter a search query!',
                    backgroundColor: "#ffa000",
                    messageColor: "white",
                    position: "topRight",
                    transitionIn: "fadeIn",
                    maxWidth: "432px"
                });
        return; 
    }

    loader.classList.remove("hidden");
    axiosGet(inputValue)
        .then((data) => {
            loader.classList.add("hidden");
            renderImages(data);
        })
        .catch((error) => {
             iziToast.show({
                    message: `An unexpected error occurred: ${error.message || error}`,
                    backgroundColor: "#ef4040",
                    messageColor: "white",
                    position: "topRight",
                    transitionIn: "fadeIn",
                    iconUrl: iconError
                });
        });
    
});






