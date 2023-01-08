const toggleBtn = document.querySelector(".navbar_toggleBtn");
// console.log("🚀 | toggleBtn", toggleBtn);

const navbarMenu = document.querySelector(".navbar_menu");
const navbarIcons = document.querySelector(".navbar_icons");
console.log("🚀 | navbarMenu", navbarMenu);
console.log("🚀 | navbarIcons", navbarIcons);

toggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
  navbarIcons.classList.toggle("active");
});
