const image = document.querySelector("#image");

console.log(image);

const imageArr = [
  "https://images.unsplash.com/photo-1661961110218-35af7210f803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1664574654578-d5a6a4f447bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  "https://plus.unsplash.com/premium_photo-1661342567521-e42e1926807a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  "https://plus.unsplash.com/premium_photo-1661683706979-c349c21f79c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1667554278033-bd56c921314c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1667554278033-bd56c921314c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
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
