const button = document.querySelector(".hamburger");
const header = document.querySelector(".header");
const gnb = document.querySelector(".gnb");

button.addEventListener("click", function () {
  header.classList.add("on");
  gnb.classList.add("on");
});
