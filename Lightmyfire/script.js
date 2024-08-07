gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

//   gsap.to("#page2 #text",{
//    y:-40,
   
//     duration:2,
//     scrollTrigger:{
//       trigger: "#page2 ",
//       scroller: "body",
//       start: "top 80%",
//       end: "top 80%",
//       scrub: 2,
//       markers:true
//     },
//     }
   
// )
// gsap.to("#page2 h1",{
//   y:-40,
//   //  fontWeight:100,
//    duration:2,
//   //  delay:1,
  
// })
// gsap.to("#page2 img",{
//   y:-40,
//   //  fontWeight:100,
//    duration:2,
//   //  delay:1,
  
// })

gsap.to("#center", {
  scrollTrigger: {
    start: "top top",
    scroller: "#main",
    trigger: "#center",
    // markers: true,
    pin: true,
    delay:0.1
  }
})
gsap.to("#center2", {
  scrollTrigger: {
    start: "top top",
    trigger: "#center2",
    scroller: "#main",
    // markers: true,
    pin: true,
    Delay:0.1,
    scrub:2
  }
})
gsap.to("#center3", {
  scrollTrigger: {
    start: "top top",
    scroller: "#main",
    trigger: "#center3",
    // markers: true,
    pin: true,
    delay:0.1
  }
})
var page7 = document.querySelector("#page7")
var cursor = document.querySelector("#cursor")
var swiperslide= document.querySelector(".swiper")
swiperslide.addEventListener("mousemove",function(dets){
  cursor.style.left = dets.x + 30 + "px"
  cursor.style.top =dets.y + 30 + "px"

})
swiperslide.addEventListener("mouseenter",function(){
    cursor.style.scale =1.5
 ease="2"
})
swiperslide.addEventListener("mouseleave",function(){
    cursor.style.scale=0.5
})

