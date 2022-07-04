"use strict";

const navbar = document.querySelector("#navbar");
const career = document.querySelector("#career");
const home = document.querySelector("#home");
const about = document.querySelector("#about");

const navbarHeight = navbar.getBoundingClientRect().height;
const careerHeight = career.getBoundingClientRect().height / 2;
const homeheight = home.getBoundingClientRect().height;
const aboutheight = about.getBoundingClientRect().height;
const graphheight = careerHeight + aboutheight + homeheight;

document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

console.log("홈" + homeheight);
console.log("어바웃" + aboutheight);
console.log("그래프" + careerHeight);
console.log(window.scrollY);
console.log(graphheight);

const navbarmenu = document.querySelector(".navbar__menu");
navbarmenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;

  if (link == null) {
    return;
  }

  scrollIntoView(link);

  console.log(link);
  console.log(scrollTo);
});

document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeheight;
  about.style.opacity = 1 - window.scrollY / aboutheight / 2;
});

const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeheight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
});

const homeContactBtn = document.querySelector(".home__contact");
homeContactBtn.addEventListener("click", () => {
  scrollIntoView("#contact");
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth", block: "center" });
}

const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");
workBtnContainer.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  projectContainer.classList.add("anim-out");

  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === "*" || filter === project.dataset.type) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });
    projectContainer.classList.remove("anim-out");
  }, 300);
});

$(function () {
  // Produces width of .barChart

  //   document.addEventListener("scroll", () => {
  //     if (window.scrollY > graphheight) {
  //       $(".graph-bar").each(function () {
  //         var dataWidth = $(this).data("value");
  //         $(this).css("width", dataWidth + "%");
  //       });
  //     } else {
  //       $(".graph-bar").each(function () {
  //         var dataWidth = $(this).data("value");
  //         $(this).css("width", 0 + "%");
  //       });
  //     }
  //   });

  $(document).ready(function () {
    $(".graph-bar").each(function () {
      var dataWidth = $(this).data("value");
      $(this).css("width", dataWidth + "%");
    });
  });

  // Positioning of .bubbleChart
  $(document).ready(function () {
    $(".chart-bubble").each(function () {
      // Bubble Size
      var bubbleSize = $(this).data("value");
      $(this).css("width", function () {
        return bubbleSize * 10 + "px";
      });
      $(this).css("height", function () {
        return bubbleSize * 10 + "px";
      });

      // Bubble Position
      var posX = $(this).data("x");
      var posY = $(this).data("y");
      $(this).css("left", function () {
        return posX - bubbleSize * 0.5 + "%";
      });
      $(this).css("bottom", function () {
        return posY - bubbleSize * 0.5 + "%";
      });
    });
  });
});
