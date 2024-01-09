gsap.registerPlugin(ScrollTrigger);

//---------------------Top ScrollTrigger---------------------
function TopScrollTrigger() {

  let TopScrollTrigger = gsap.timeline({
    scrollTrigger: {
      trigger: ".top",
      toggleActions: "restart restart restart restart",
      start: "0% 100%",
      end: "100% 0%",
      markers: "true",
    }
  })
  TopScrollTrigger

    .from('.top .top__inner .top__inner-title .top__inner-hello', {
      opacity: 0, y: "-18%", duration: 1.3, ease: "sine",
    }, 0.4)
    .from('.top .top__inner .top__inner-title .top__inner-name', {
      opacity: 0, y: "-18%", duration: 1.5, ease: "sine",
    }, 0.4)
    .from('.top .top__inner .top__inner-img img', {
      opacity: 0, y: "8%", duration: 1, ease: "sine",
    }, 0.4)
    .from('.top .top__inner .top__inner-content .top__inner-desc', {
      opacity: 0, x: "18%", duration: 1.5, stagger: 0.4, ease: "sine",
    }, 0.4)
    .from('.top .top__inner .top__inner-content .top__inner-experience', {
      opacity: 0, x: "-18%", duration: 1.5, stagger: 0.4, ease: "sine",
    }, 0.4)



}
//---------------------/About Page ScrollTrigger---------------------
function AboutScrollTrigger() {
  let AboutScrollTrigger = gsap.timeline({
    scrollTrigger: {
      trigger: ".about",
      toggleActions: "restart restart restart restart",
      start: "10% 100%",
      end: "100% 0%",
      markers: "true",
    }
  })
  AboutScrollTrigger

    .from('.about .heading__title', {
      opacity: 0, y: "8%", duration: 1, ease: "sine",
    }, 0.4)

    .from('.about .about__content-desc', {
      opacity: 0, y: "8%", duration: 1.3, stagger: 0.4, ease: "sine",
    }, 0.4)

    .from('.about .flex-col ', {
      opacity: 0, y: "8%", duration: 1.3, stagger: 0.4, ease: "sine",
    }, 0.4)
}

//---------------------/About Page ScrollTrigger---------------------
function ServiceScrollTrigger() {
  let ServiceScrollTrigger = gsap.timeline({
    scrollTrigger: {
      trigger: ".service",
      toggleActions: "restart restart restart restart",
      start: "10% 100%",
      end: "100% 0%",
      markers: "true",
    }
  })
  ServiceScrollTrigger

    .from('.service .heading__title', {
      opacity: 0, y: "8%", duration: 1, ease: "sine",
    }, 0.4)

    .from('.service .about__content-desc', {
      opacity: 0, y: "8%", duration: 1.3, stagger: 0.4, ease: "sine",
    }, 0.4)

    .from('.service .service__card ', {
      opacity: 0, y: "8%", duration: 1.3, stagger: 0.4, ease: "sine",
    }, 0.4)
}


window.onload = () => {
  TopScrollTrigger()
  AboutScrollTrigger()
  ServiceScrollTrigger()
}


//---------------------/Cursor Mouse---------------------

gsap.set(".cursor", { force3D: true });
document.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;

  gsap.to(".cursor", {
    x: x - 16,
    y: y - 16,
    ease: "power3"
  });
});

document.body.addEventListener("mouseleave", () => {
  gsap.to(".cursor", {
    scale: 0,
    duration: 0.1,
    ease: "none"
  });
});

document.body.addEventListener("mouseenter", () => {
  gsap.to(".cursor", {
    scale: 1,
    duration: 0.1,
    width:16,
    height:16,
    ease: "none"
  });
});

let hoverCursors = document.querySelectorAll('[data-cursor="hover"]');

hoverCursors.forEach(function (cursor) {
  cursor.addEventListener("mouseenter", () => {
    gsap.to(".cursor", {
        width:40,
        height:40
    });
  });

  cursor.addEventListener("mouseleave", () => {
    gsap.to(".cursor", {
        width:16,
        height:16,
      scale: 1
    });
  });
});






