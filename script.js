
gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".capsule-wrapper",
    start: "top top",
    end: "+=200%",
    scrub: true,
    pin: true,
  },
  ease: "power2.inOut"
});

tl.to(".capsule-top", { top: "-15%", duration: 1 }, 0);
tl.to(".capsule-bottom", { top: "105%", duration: 1 }, 0);


tl.fromTo(".offer-head",{y: "500%", rotate: 90}, {y: "-20%", rotate: 0}, "<+0.5");
tl.fromTo(".offer-p",{bottom : "50%", x: "-5%", rotate: 90, left : "60%"}, { y: "30%", x: "-42%", rotate: 0, left: "40%" }, "<+0.2");

tl.fromTo(".offer-img", { opacity: 1, y: 800, bottom : "100%" }, { opacity: 1, y: 80, duration: 0.5, bottom: "0%" }, "<+0.2");
tl.fromTo(".offer-money", {  x:"200%" }, {  duration: 0.5, x: "-80%" }, "<+0.2");
tl.fromTo(".cta",{y: 800, bottom: "-20%"}, {y: -30, duration: 0.25, bottom: "10%"}, "<-0.5");

tl.to(".capsule-top", {top: "-18%", width: "800px"}, "<");
tl.to(".capsule-bottom", {top: "110%", width: "800px"}, "<");


