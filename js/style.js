const toggleBar = document.querySelector(".toggle-bars");
const navbar = document.querySelector("nav");
let heroImage = document.getElementById("home");

toggleBar.addEventListener("click", () => {
  navbar.classList.toggle("hidden");
});
navbar.onclick = function () {
  return navbar.classList.remove("hidden");
};
setInterval(() => {
  let backNum = Math.trunc(Math.random() * 4) + 1;
  heroImage.style.backgroundImage = `url("./imgs/background-${backNum}.jpg")`;
}, 2000);
