const main = document.querySelector(".main-1");
const menu = document.querySelector("#menu");
const cross = document.querySelector(".fa-xmark");
const blurs = document.querySelector(".blur");
const side = document.querySelector(".hdn-side");

menu.addEventListener("click", () => {
  side.classList.add("active");
  blurs.classList.add("active");
});
