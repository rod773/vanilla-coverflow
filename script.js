//DOM elements
const coverflowContainer = document.querySelector('.coverflow');
const coverflowImages = [...document.querySelectorAll('.coverflow__image')];
const prevArrow = document.querySelector('.prev-arrow');
const nextArrow = document.querySelector('.next-arrow');

//set indicies and initial position
coverflowImages.forEach(function(coverflowImage, i) {
  coverflowImage.dataset.coverflowIndex = i + 1;
});
let coverflowPosition = Math.floor(coverflowImages.length/2) + 1;
coverflowContainer.dataset.coverflowPosition = coverflowPosition;

//navigation functions
function viewPrevImage() {
  coverflowPosition = Math.max(1, coverflowPosition - 1);
  coverflowContainer.dataset.coverflowPosition = coverflowPosition;
}
function viewNextImage() {
  coverflowPosition = Math.min(coverflowImages.length, coverflowPosition + 1);
  coverflowContainer.dataset.coverflowPosition = coverflowPosition;
}
function jumpToImage(targetImage) {
  coverflowPosition = Math.min(coverflowImages.length, Math.max(1, targetImage.dataset.coverflowIndex));
  coverflowContainer.dataset.coverflowPosition = coverflowPosition;
}

//add event handlers
prevArrow.addEventListener('click', viewPrevImage);
nextArrow.addEventListener('click', viewNextImage);
coverflowImages.forEach(function(image) {
  image.addEventListener('click', evt => jumpToImage(evt.target));
});
window.addEventListener('keyup', (evt) => {
  if (evt.which ===  37) { //left arrow
    viewPrevImage();
  } else if (evt.which === 39) { //right arrow
    viewNextImage();
  }
});