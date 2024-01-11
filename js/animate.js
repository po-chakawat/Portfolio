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
      opacity: 0, x: "48%", y: "-28%", duration: 4, stagger: 0.4, ease: "sine",
    }, 0.4)
    .from('.service .service__hand .service__hand-right ', {
      opacity: 0, x: "-48%", y: "-28%", duration: 4, stagger: 0.4, ease: "sine",
    }, 0.4)
}


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

/////////////////////////////////////////////////////////////////////



const tlContents = gsap.utils.toArray('.timelineContent');
//loop thorugh the list Elements and apply the Scrolltrigger to draw the Border around the Elements
if($(window).width() >= 800){
    console.log("desktop");
tlContents.forEach(tC => {
  gsap.fromTo(tC, { 
    'background-size': '0%',
    ease: "linear",
    scrollTrigger: {
      trigger: tC,
      scrub: true,
      start: "top 65%",
      end: "bottom 65%",
    }
    },{
        'background-size': '150%',
        ease: "linear",
        scrollTrigger: {
            trigger: tC,
            scrub: true,
            start: "top 65%",
            end: "bottom 65%",
          }
  })
});
}
else {
    console.log("mobile");
    tlContents.forEach(tC => {
        gsap.fromTo(tC, { 
          'background-size': '0%',
          ease: "linear",
          scrollTrigger: {
            trigger: tC,
            scrub: true,
            start: "top 65%",
            end: "bottom 65%",
          }
          },{
              'background-size': '250%',
              ease: "linear",
              scrollTrigger: {
                  trigger: tC,
                  scrub: true,
                  start: "top 65%",
                  end: "bottom 65%",
                }
        })
      });
}
tlContents.forEach(tC => {
    gsap.fromTo($(tC).find('div').children(), { 
      opacity: 0,
      ease: "linear",
      scrollTrigger: {
        trigger: tC,
        scrub: true,
        start: "top 65%",
        end: "bottom 65%",
      }
      },{
        opacity: 3,
        ease: "linear",
        scrollTrigger: {
          trigger: tC,
          scrub: true,
          start: "top 65%",
          end: "bottom 65%",
        }
    })
  });

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






