const btn = document.querySelector(".dropdown__btn");
const content = document.querySelector(".dropdown__content");

btn.addEventListener("click", () => {
  content.classList.toggle("active");
  btn.classList.toggle("active");
});
