const btnMenu = document.querySelector(".btn-menu");
const menu = document.querySelector(".links-menu");

btnMenu.addEventListener("click", () => {
  console.log("Clicou");

  menu.classList.toggle("teste");
});
