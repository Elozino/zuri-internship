const image = document.querySelector("#image");

console.log(image);

const imageArr = [
  "./assets/image.png",
  "./assets/image1.png",
  "./assets/image2.png",
  "./assets/image3.png",
  "./assets/image4.png",
  "./assets/image5.png",
];

let currentSlide = 0;
image.src = imageArr[currentSlide];
function slide(type) {
  if (type == "next") {
    currentSlide += 1;
    if (currentSlide > 5) {
      currentSlide = 0;
    }
    image.src = imageArr[currentSlide];
    // console.log(currentSlide);
  } else if (type == "prev") {
    currentSlide -= 1;
    if (currentSlide < 0) {
      currentSlide = 5;
    }
    image.src = imageArr[currentSlide];
    // console.log(currentSlide);
  } else {
    image.style.src = imageArr[0];
  }
}
