"use strict";

function onScroll() {
  // get main scroll-snap container
  const main = document.querySelector('#snap-main');

  // validate if is going down or up
  if (main.scrollTop > window.innerHeight / 2) {
    document.getElementsByClassName("navbar")[0].style.top = "0";
  } else {
    document.getElementsByClassName("navbar")[0].style.top = "-64px";
  }
}

// assign event listener to scroll with the wheel
// window.onwheel = onScroll;

// assing event listener to scroll with the finger on mobile
// window.ontouchmove = onScroll;