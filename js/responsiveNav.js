const menu = document.querySelector(".header__nav--responsive");
const items = Array.from(document.querySelectorAll(".main")); // get the main nav items
// console.log(items);
menu.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("main");
    item.classList.toggle("mobile");
  });
});
