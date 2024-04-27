function loaderAnimation() {
  var tl = gsap.timeline();
  // To disable scroll
  gsap.set("body, html", { overflow: "hidden", height: "100vh" });
  tl.to(
    ".loader_circle",
    {
      duration: 0.5,
      rotation: 360,
      transformOrigin: "50% 50%",
      // repeat: 1, // Repeat infinitely
      ease: "linear",
    },
    "a"
  );
  tl.to(
    ".loader",
    {
      opacity: 0,
      duration: 0.2,
      delay: 0.4,
      onComplete: function () {
        document
          .querySelector(".loader")
          .setAttribute("style", "display: none; z-index: 0;");
        // To enable scroll
        gsap.set("body, html", { overflow: "", height: "" });
      },
    },
    "b"
  );
}
function navAnimation() {
  const nav = document.querySelector(".nav");
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      nav.classList.remove("scroll-up");
    }

    if (currentScroll > lastScroll && !nav.classList.contains("scroll-down")) {
      nav.classList.remove("scroll-up");
      nav.classList.add("scroll-down");
    }

    if (currentScroll < lastScroll && nav.classList.contains("scroll-down")) {
      nav.classList.remove("scroll-down");
      nav.classList.add("scroll-up");
    }
    lastScroll = currentScroll;
  });
}
function homePageAnimation() {
  var clutter = "";
  document
    .querySelector(".homeHeading")
    .textContent.split("")
    .forEach(function (e) {
      if (e === " ") clutter += `<sapn>&nbsp;</span`;
      clutter += `<span>${e}</span>`;
    });
  document.querySelector(".homeHeading").innerHTML = clutter;

  gsap.set(".slidesm", { scale: 7 });
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      end: "bottom bottom",
      // markers: true,
      // pin: true,
      scrub: 1,
    },
  });
  tl.to(
    ".vdodiv",
    {
      "--clip": "0%",
      ease: Power2,
    },
    "a"
  ).to(
    ".slidesm",
    {
      scale: 1.2,
      ease: Power2,
    },
    "a"
  );
  // animation
  gsap.set(".homeHeading span", { opacity: 0.1 });
  tl.to(
    ".homeHeading span",
    {
      opacity: 1,
      duration: 0.3,
      stagger: 0.01,
      ease: Power4,
    },
    "a"
  )
    .to(
      ".lft",
      {
        xPercent: -10,
        stagger: 0.03,
        ease: Power4,
      },
      "b"
    )
    .to(
      ".rgt",
      {
        xPercent: 10,
        stagger: 0.03,
        ease: Power4,
      },
      "b"
    );
}
function craftPageAnimation() {
  gsap.to(".card", {
    scrollTrigger: {
      trigger: ".craft",
      start: "16% bottom",
      end: "bottom bottom",
      // markers: true,
      scrub: 1,
    },
    backgroundColor: "black",
    color: "#AEDEE0",
    scale: 1.16,
    stagger: 0.2,
    ease: "power4.inOut",
  });
}
function realPageAnimation() {
  gsap.to(".slide", {
    scrollTrigger: {
      trigger: ".cont",
      start: "top top",
      end: "bottom bottom",
      // markers: true,
      pin: "#realSecBtn",
      scrub: 1,
    },
    xPercent: -310,
    ease: Power4,
  });
}
function loco() {
  (function () {
    const locomotiveScroll = new LocomotiveScroll();
  })();
}
function capsulesAnimation() {
  gsap.to(".capsule:nth-child(2)", {
    scrollTrigger: {
      trigger: ".capsules",
      start: "top 70%",
      end: "bottom bottom",
      // markers: true,
      scrub: 1,
    },
    y: 0,
    ease: Power4,
  });
}
function themeChange() {
  document.querySelectorAll(".section").forEach(function (e) {
    ScrollTrigger.create({
      trigger: e,
      start: "top 50%",
      end: "bottom 50%",
      // markers: true,
      onEnter: function () {
        const newTheme = e.dataset.color;
        document.body.setAttribute("theme", newTheme);
      },
      onEnterBack: function () {
        const newTheme = e.dataset.color;
        document.body.setAttribute("theme", newTheme);
      },
    });
  });
}
function rotateAnimation() {
  gsap.to(".rotateImg", {
    rotation: 360,
    duration: 25,
    repeat: -1,
    ease: "linear",
  });
}
function footerLogoAnimation() {
  // timeline for animation
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".signifco", // Trigger element
      start: "top 90%", // Start the animation when the top of the trigger element reaches 90% of the viewport
      end: "top 70%", // End the animation when the top of the trigger element reaches 40% of the viewport
      scrub: 0.5, // Smoothness of the animation
      // markers: true,
    },
  });

  // animation sequence for each letter
  const letters = document.querySelectorAll(".signifco span");
  letters.forEach((letter, index) => {
    tl.from(letter, {
      opacity: 0,
      y: 20,
      ease: "elastic.out",
      duration: 0.2,
      delay: index * 0.05,
    });
  });
}
function waveTextAnimation() {
  document.querySelectorAll(".textMove").forEach(function (el) {
    var index = 0;
    var animating = false;
    el.addEventListener("mouseenter", function () {
      var text = el.querySelectorAll(".waveText");

      if (!animating) {
        animating = true;
        gsap.to(text[index], {
          top: "-=100%",
          ease: Power4,
          duration: 0.5,
          onComplete: function () {
            gsap.set(this._targets[0], { top: "100%" });
            animating = false;
          },
        });
        index === text.length - 1 ? (index = 0) : index++;

        gsap.to(text[index], {
          top: "-=100%",
          ease: Power4,
          duration: 0.5,
        });
      }
    });
  });
}
function waveTextBtnAnimation() {
  document.querySelectorAll(".btn").forEach(function (el) {
    var index = 0;
    var animating = false;
    el.addEventListener("mouseenter", function () {
      var text = el.querySelectorAll(".waveTextBtn");
      var icon = el.querySelector(".aIcon");

      if (!animating) {
        animating = true;
        gsap.to(text[index], {
          top: "-=100%",
          ease: Power4,
          duration: 0.5,
          onComplete: function () {
            gsap.set(this._targets[0], { top: "100%" });
            animating = false;
          },
        });
        index === text.length - 1 ? (index = 0) : index++;

        gsap.to(text[index], {
          top: "-=100%",
          ease: Power4,
          duration: 0.5,
        });

        gsap.to(icon, {
          rotation: 50, // Rotate 360 degrees
          duration: 0.5, // Duration of the animation in seconds
          ease: Power4,
        });
      }
    });
    el.addEventListener("mouseleave", function () {
      var icon = el.querySelector(".aIcon");

      gsap.to(icon, {
        rotation: 0, // Rotate 360 degrees
        duration: 0.5, // Duration of the animation in seconds
        ease: Power4,
      });
    });
  });
}

function imageAnimation() {
  document.querySelectorAll(".names .member").forEach(function (elem) {
    elem.addEventListener("mousemove", function (dets) {
      gsap.to(elem.querySelector(".img"), {
        opacity: 1,
        ease: "linear",
        duration: 0.1,
        x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
      });
    });
    elem.addEventListener("mouseenter", function (dets) {
      gsap.to(elem.querySelector(".img"), {
        opacity: 1,
        ease: "linear",
        duration: 0.1,
        x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
      });
    });
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector(".img"), {
        opacity: 0,
        ease: "linear",
        duration: 0.1,
      });
    });
  });
}

function splitToSpanAndAnimate(parent) {
  // spliting to letter logic
  let clutter = "";
  document
    .querySelector(`${parent} p`)
    .textContent.split("")
    .forEach(function (letter) {
      clutter += `<span>${letter}</span>`;
    });
  document.querySelector(`${parent} p`).innerHTML = clutter;

  // animating span
  gsap.from(`${parent} p span`, {
    color: "#e5e5e5",
    stagger: 0.5,
    scrollTrigger: {
      scroller: "body",
      trigger: `${parent}`,
      start: "top 90%",
      end: "bottom 60%",
      scrub: 1,
    },
  });
}

function rotate() {
  gsap.to(".circleSVG", {
    rotate: 360,
    ease: "linear",
    repeat: -1,
    duration: 10,
  });
}

loaderAnimation();
loco();
navAnimation();
homePageAnimation();
realPageAnimation();
capsulesAnimation();
themeChange();
rotateAnimation();
waveTextAnimation();
waveTextBtnAnimation();
craftPageAnimation();
imageAnimation();
splitToSpanAndAnimate(".para1");
splitToSpanAndAnimate(".para2");
rotate();
footerLogoAnimation();
