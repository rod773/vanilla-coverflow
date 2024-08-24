//DOM elements
const coverflowContainer = document.querySelector(".coverflow");
const coverflowImages = [...document.querySelectorAll(".coverflow__image")];
const prevArrow = document.querySelector(".prev-arrow");
const nextArrow = document.querySelector(".next-arrow");

let cont = 0;

//set indicies and initial position
coverflowImages.forEach(function (coverflowImage, i) {
  coverflowImage.dataset.coverflowIndex = i + 1;
});

let coverflowPosition = Math.floor(coverflowImages.length / 2) + 1;

coverflowContainer.dataset.coverflowPosition = coverflowPosition;

//navigation functions
function viewPrevImage() {
  cont--;
  coverflowPosition = cont % coverflowImages.length;
  console.log(coverflowPosition);
  coverflowContainer.dataset.coverflowPosition = coverflowPosition;
}
function viewNextImage() {
  cont++;
  coverflowPosition = cont % coverflowImages.length;
  console.log(coverflowPosition);
  coverflowContainer.dataset.coverflowPosition = coverflowPosition;
}

function jumpToImage(targetImage) {
  coverflowPosition = Math.min(
    coverflowImages.length,
    Math.max(1, targetImage.dataset.coverflowIndex)
  );

  coverflowContainer.dataset.coverflowPosition = coverflowPosition;
}

//add event handlers
prevArrow.addEventListener("click", viewPrevImage);
nextArrow.addEventListener("click", viewNextImage);
coverflowImages.forEach(function (image) {
  image.addEventListener("click", (evt) => jumpToImage(evt.target));
});

window.addEventListener("scroll", (event) => {
  //console.log(this.oldScroll > this.scrollY);
  if (this.oldScroll - this.scrollY > 5) {
    prevArrow.click();
  } else if (this.oldScroll - this.scrollY < -5) nextArrow.click();

  this.oldScroll = this.scrollY;
});

setInterval(() => {
  nextArrow.click();
}, 2000);
