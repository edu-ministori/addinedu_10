const button = document.querySelector(".hamburger");
const header = document.querySelector(".header");
const gnb = document.querySelector(".gnb");

let openStatus = false;

button.addEventListener("click", function () {
  // if (openStatus === false) {
  //   header.classList.add("on");
  //   gnb.classList.add("on");
  //   openStatus = true;
  // } else {
  //   header.classList.remove("on");
  //   gnb.classList.remove("on");
  //   openStatus = false;
  // }

  header.classList.toggle("on");
  gnb.classList.toggle("on");
});

const slide = document.querySelectorAll(".slide");

let current = 0;
let next = 1;
let id;

function slideAnimation() {
  id = window.setInterval(function () {
    if (next > 2) {
      next = 0;
    }

    for (let i = 0; i < 3; i++) {
      slide[i].classList.remove("in", "out");
      slide[i].classList.add("jump");
    }

    slide[current].classList.remove("in", "jump");
    slide[current].classList.add("out");

    slide[next].classList.remove("out", "jump");
    slide[next].classList.add("in");

    current = next;
    next++;
  }, 3000);
}

slideAnimation();

const buttonPlay = document.querySelector(".btn-play");
const buttonStop = document.querySelector(".btn-stop");

buttonStop.addEventListener("click", function () {
  window.clearInterval(id);
});

buttonPlay.addEventListener("click", function () {
  slideAnimation();
});

const tabItem = document.querySelectorAll(".tab-item");

tabItem.addEventListener("click", function () {});
