const toggleBar = document.querySelector(".toggle-bars");
const navbar = document.querySelector("nav");
toggleBar.addEventListener("click", () => {
  navbar.classList.toggle("hidden");
});
