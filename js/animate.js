gsap.registerPlugin(ScrollTrigger);

//---------------------Top ScrollTrigger---------------------
function TopScrollTrigger() {

  let TopScrollTrigger = gsap.timeline({
    scrollTrigger: {
      trigger: ".top",
      toggleActions: "restart restart restart restart",
      start: "0% 100%",
      end: "95% 0%",
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

//---------------------/Service & Skill Page ScrollTrigger---------------------
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

    .from('.service .service__card ', {
      opacity: 0, y: "8%", duration: 1.3, stagger: 0.4, ease: "sine",
    }, 0.4)

    .from('.service .skill__card ', {
      opacity: 0, y: "8%", duration: 1.3, stagger: 0.4, ease: "sine",
    }, 0.4)
    .from('.service .service__hand .service__hand-left ', {
      opacity: 0, x: "48%", y: "28%", duration: 4, stagger: 0.4, ease: "sine",
    }, 0.4)
    .from('.service .service__hand .service__hand-right ', {
      opacity: 0, x: "-48%", y: "28%", duration: 4, stagger: 0.4, ease: "sine",
    }, 0.4)
}

//---------------------/Experience Page ScrollTrigger---------------------
gsap.set(".experience__line", {transformOrigin: "top"})


gsap.fromTo(".experience__line", {
  scaleY: 0,
}, {
  scaleY: 1.1,
  ease: "none",
  scrollTrigger: {
    trigger: ".experience__timeline",
    start: "top 100%",
    end: "bottom 30%",
     markers: "true",
    scrub: 1.5,
  }
});

const tlCompany = gsap.utils.toArray('.experience__timeline .row ');
//loop thorugh the list Elements and apply the Scrolltrigger to draw the Border around the Elements
if($(window).width() >= 800){
    console.log("desktop");
    tlCompany.forEach(tC => {
  gsap.fromTo(tC, { 
    opacity: 0,
    ease: "linear",
    scrollTrigger: {
      trigger: tC,
      scrub: true,
      // markers: "true",
      start: "top 100%",
      end: "bottom top",
    }
    },{
      opacity: 3,
        ease: "linear",
        scrollTrigger: {
            trigger: tC,
            scrub: true,
            // markers: "true",
            start: "top 90%",
            end: "bottom top",
          }
  })
});
}
else {
    console.log("mobile");
    tlCompany.forEach(tC => {
        gsap.fromTo(tC, { 
          opacity: 0,
          ease: "linear",
          scrollTrigger: {
            trigger: tC,
            scrub: true,
            start: "top 80%",
            end: "bottom 80%",
          }
          },{
            opacity: 3,
              ease: "linear",
              scrollTrigger: {
                  trigger: tC,
                  scrub: true,
                  start: "top 80%",
                  end: "bottom 80%",
                }
        })
      });
}

//---------------------/Portfolio Page ScrollTrigger---------------------

function LandingPageScrollTrigger() {

  gsap.to('portfolio', { // LoadingAnimation---------------------
      opacity: 1, duration: 1.3,
  }) // /LoadingAnimation---------------------

  let LandingPageScrollTrigger = gsap.timeline({
      scrollTrigger: {
          trigger: ".portfolio__inner",
          start: "top 0%",
          end: "bottom 0%",
          markers:true,
          pin: ".portfolio__inner",
          scrub: 2.2,
      }
  })
  LandingPageScrollTrigger
  
      .to('.portfolio__inner .portfolio__monitor', { transform: 'translateZ(4500px)', }, 0)
      .to('.portfolio__inner .portfolio__video--code', { transform: 'translateZ(3700px)', }, 0)
      .to('.portfolio__inner .portfolio__video--designsystem', { transform: 'translateZ(3100px)', }, 0)
      .to('.portfolio__inner .portfolio__video--principles', { transform: 'translateZ(2800px)', }, 0)
      .to('.portfolio__inner .portfolio__bubble--01', { opacity: 0, }, 0)
      .to('.portfolio__inner .portfolio__bubble--02', { opacity: 0, }, 0)
      .to('.portfolio__inner .portfolio__bubble--03', { opacity: 0, }, 0)
      .to('.portfolio__inner .portfolio__bubble--04', { opacity: 0, }, 0)
      .to('.portfolio__inner .portfolio__bubble--05', { opacity: 0, }, 0)

      .from('.portfolio__inner .portfolio__title--01 ', { y: 130, opacity: 0 }, 0.31)
      .from('.portfolio__slider .portfolio__title--02', { y: 400 , opacity: 0 }, 0.31)
      .from('.portfolio__slider .portfolio__slider--03', { x: 400 ,y: -200, opacity: 0 }, 0.31)
      .from('.portfolio__slider .portfolio__slider--04', { x: -400 ,y: 200, opacity: 0 }, 0.31)
      .from('.portfolio__slider .portfolio__slider--05', { x: -400 , opacity: 0 }, 0.31)
      .from('.portfolio__slider .portfolio__slider--06', { x: -400 ,y:-200, opacity: 0 }, 0.31)
      .from('.portfolio__slider .test', { x: 0, opacity: 0 }, 0.5)
      .from('.portfolio__slider .portfolio__bg', { x: 0 , opacity: 0 }, 0.31)
      .from('.portfolio__slider .portfolio__text', { y: 130, opacity: 0 }, 0.5)
      .from('.portfolio__slider .portfolio__text--02', { y: 130, opacity: 0 ,backgroundColor: "#f0f0f0"}, 1)
}




window.onload = () => {
  TopScrollTrigger()
  AboutScrollTrigger()
  ServiceScrollTrigger()
  LandingPageScrollTrigger()
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






