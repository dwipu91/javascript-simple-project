//smooth scrolling

// gsap
// ScriptProcessorNode
// trogger

/**
 * SMOOTH SCROLLING {
 *        attach loco scroll css
 *        attach locomotive scroll min js
 *        some code form loco github for js}
 *
 *
 *   GSAP{
 *          attach gsap
 *           }
 *
 *
 */
// smooth scrolling website
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

//
function circleMouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", function (details) {
    document.querySelector("#mini-circle").style.transform = `translate(${
      details.clientX - 10
    }px, ${details.clientY - 10}px) scale(${xscale},${yscale})`;
  });
}
circleMouseFollower();

//
function firstPageAnimation() {
  var timeLess = gsap.timeline();
  timeLess
    .from("#nav", {
      y: "-20",
      opacity: 0,
      duration: 1.5,
      ease: Expo.easeInOut,
    })
    .to(".boundeingelement", {
      y: 0,
      delay: -1,
      duration: 1.5,
      ease: Expo.easeInOut,
      stagger: 0.2,
    })
    .from(".hero-footer", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
}
firstPageAnimation();

//
var timeout;
function circleChapterKaro() {
  let xscale = 1;
  let yscale = 1;

  var xminscale = 0;
  var yminscale = 0;

  window.addEventListener("mousemove", function (details) {
    clearTimeout(timeout);

    xscale = gsap.utils.clamp(0.8, 1.2, details.clientX - xminscale);
    yscale = gsap.utils.clamp(0.8, 1.2, details.clientY - yminscale);

    xminscale = details.clientX;
    yminscale = details.clientY;

    circleMouseFollower(xscale, yscale);

    setTimeout(function () {
      timeout = document.querySelector(
        "#mini-circle"
      ).style.transform = `translate(${details.clientX - 10}px, ${
        details.clientY - 10
      }px) scale(1,1)`;
    }, 100);
  });
}
circleChapterKaro();

//

document.querySelectorAll(".element").forEach(function (elem) {
  let rotate = 0;
  let different = 0;

  elem.addEventListener("mouseleave", function (details) {
    let diff = details.clientY - elem.getBoundingClientRect().top;

    //
    different = details.clientX - rotate;
    rotate = details.clientX;

    //
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power1,
      duration: 0.5,
    });
  });
});
document.querySelectorAll(".element").forEach(function (elem) {
  let rotate = 0;
  let different = 0;

  elem.addEventListener("mousemove", function (details) {
    let diff = details.clientY - elem.getBoundingClientRect().top;

    //
    different = details.clientX - rotate;
    rotate = details.clientX;

    //
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: details.clientX,
      rotate: gsap.utils.clamp(-20, 20, different * 0.5),
    });
  });
});
