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
const group = document.querySelectorAll(".group");
let indexNumber = 0;

for (let i = 0; i < 3; i++) {
  tabItem[i].addEventListener("click", function (event) {
    // 클릭한 요소외의 나머지 요소는 비활성화(=> 전체 요소를 비활성화 구현) => active class 삭제
    for (let j = 0; j < 3; j++) {
      tabItem[j].classList.remove("active");
      group[j].classList.remove("active");
    }

    // 클릭한 요소의 인덱스 번호 => tab, group의 해당 인덱스번호 순서의 요소에 active class를 추가

    // tab 활성화
    this.classList.add("active");

    // group 활성화
    for (let k = 0; k < 3; k++) {
      if (tabItem[k] === this) {
        // this = event.currentTarget
        indexNumber = k;
      }
    }

    group[indexNumber].classList.add("active");
  });
}
