// console.log(window.innerWidth);

window.addEventListener("scroll", () => {
  const fromTop = window.scrollY;
  const cloneNav = document.querySelector(".header__nav-clone");
  cloneNav.classList.toggle("hidden", fromTop < 475);
  // console.log(fromTop);
});
