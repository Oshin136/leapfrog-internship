const container__wrapper = document.querySelector(".image__carousel");
const container = document.querySelector(".image__carousel__wrapper");
const images = [...container.children];
const maxlength = images.length;
const next = document.querySelector(".btn--next");
const previous = document.querySelector(".btn--previous");
const indicator = document.querySelector(".btn__indicator");
