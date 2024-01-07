gsap.registerPlugin(ScrollTrigger);

//---------------------Landing Page ScrollTrigger---------------------
function LandingPageScrollTrigger() {



    let LandingPageScrollTrigger = gsap.timeline({
        scrollTrigger: {
            trigger: ".top",
            toggleActions: "restart restart restart restart",
            start: "0% 100%",
            end: "100% 0%",
            markers: "true",
        }
    })
    LandingPageScrollTrigger
  
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
//---------------------/Landing Page ScrollTrigger---------------------
function SliderScrollTrigger() {



    let SliderScrollTrigger = gsap.timeline({
        scrollTrigger: {
            trigger: ".about",
            toggleActions: "restart restart restart restart",
            start: "10% 100%",
            end: "100% 0%",
            markers: "true",

     
        }
    })
    SliderScrollTrigger

        .from('.about .head-title', {
            opacity: 0, y: "18%", duration: 1.3, ease: "sine",
        }, 0.4)
   
        .from('.about .about__content-desc', {
            opacity: 0, y: "18%", duration: 1.3, ease: "sine",
        }, 0.4)

        .from('.about .flex-col ', {
            opacity: 0, y: "8%", duration: 1.3, ease: "sine",
        }, 0.4)
}


/*-------------Navbar (max-width: 400px)------------- */
function Navbar() {
    gsap.from('#wrapper #Navbar', {
        opacity: 0, x: "40%", duration: 2.2, ease: "sine.in",
    })
    var NavAni = gsap.timeline();
    NavAni.from('#wrapper nav', {
        opacity: 0, y: "13%", duration: 0.5, ease: "sine",
    })
        .reverse();
    $("#wrapper #Navbar").click(function () {
        $("#wrapper nav").toggleClass("DisplayNone");
        NavAni.reversed(!NavAni.reversed());
    });
}
/*-------------/Navbar (max-width: 400px)------------- */

window.onload = () => {
    LandingPageScrollTrigger()
    SliderScrollTrigger()
 
}
