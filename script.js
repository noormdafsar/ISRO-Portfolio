const scroll = new LocomotiveScroll({
    el: document.querySelector('.wrapper'),
    smooth: true
});
var t1=gsap.timeline();
t1.to(".wrapper",{
    y:"100vh",
    scale:0.6,
    duration:0
})
t1.to(".wrapper",{
    y:"30vh",
    duration:1,
    delay:1
})

t1.to(".wrapper",{
    y:"0vh",
    rotate:360,
    scale:1,
    duration:0.8,
})