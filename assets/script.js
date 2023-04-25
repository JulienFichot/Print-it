const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let nbr_total_images = slides.length - 1;

slides.forEach((e) => {
  let dot = document.createElement("div");
  dot.className = "dot";
  let dots_container = document.getElementById("dots");
  dots_container.appendChild(dot);
});

var current_index = 0;
const dots = document.querySelectorAll(".dot");
changeSlide(current_index);

const next = document.getElementById("arrow_right");
next.addEventListener("click", function () {
  if (current_index < nbr_total_images) {
    dots[current_index].classList.remove("dot_selected");
    current_index++;
    console.log(current_index);
    changeSlide(current_index);
  } else {
    dots[current_index].classList.remove("dot_selected");
    current_index = 0;
    changeSlide(current_index);
  }
});

const prev = document.getElementById("arrow_left");
prev.addEventListener("click", function () {
  if (current_index > 0) {
    dots[current_index].classList.remove("dot_selected");
    current_index--;
    console.log(current_index);
    changeSlide(current_index);
  } else {
    dots[current_index].classList.remove("dot_selected");
    current_index = 3;
    changeSlide(current_index);
  }
});

function changeSlide(index) {
  document.getElementById(
    "banner"
  ).style.backgroundImage = `url(./assets/images/slideshow/${slides[index].image})`;
  dots[index].classList.add("dot_selected");
  document.querySelector("#banner p").innerHTML = slides[index].tagLine;
}
