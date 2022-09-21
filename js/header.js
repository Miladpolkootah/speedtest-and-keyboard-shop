const mheader = document.querySelector('.mheader');
const BURGER = document.querySelector(".mheader-burger");
const NAVLINKS = document.querySelectorAll(".nav-lin");
const CONNAV = document.querySelector(".mheader-links");
const nav = document.querySelector(".nav")
const ShowAndHide = document.querySelectorAll(".hide");
const main  = document.querySelector("main");
console.log(ShowAndHide);

const BURGERM = document.querySelector('.mheader-burgerM');

BURGER.addEventListener("click", () => {
  BURGER.classList.toggle("expanded");
  for (let i = 0; i < NAVLINKS.length; i++) {
    if (NAVLINKS[i].classList.contains("nav-hidden")) {
      NAVLINKS[i].classList.remove("nav-hidden");
    } else {
      NAVLINKS[i].classList.add("nav-hidden");
    }
  }
  for(let i=0; i<ShowAndHide.length; i++){
    ShowAndHide[i].classList.toggle('hide');
    ShowAndHide[i].classList.toggle('show');
  }
  main.classList.toggle('overlay');
});

