const toggleBar = document.querySelector(".toggle-bars");
const navbar = document.querySelector("nav");

toggleBar.addEventListener("click", () => {
  navbar.classList.toggle("hidden");
});
navbar.onclick = function () {
  return navbar.classList.remove("hidden");
};
