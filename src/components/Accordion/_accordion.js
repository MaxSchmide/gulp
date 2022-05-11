const trigger = document.querySelectorAll(".accordion__item-trigger");
const content = document.querySelectorAll(".accordion__item-content");

for (let i = 0; i < trigger.length; i++) {
  trigger[i].addEventListener("click", () => {
    content[i].classList.toggle("active");
    trigger[i].classList.toggle("active");
  });
}
