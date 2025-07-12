
// nav bar animation

gsap.from("nav .left-logo", {
    opacity: 0,
    y: -100,
    duration: 2,
    delay: 0.3,
})


gsap.from("nav .right-links-box .rond-box", {
    opacity: 0,
    y: -100,
    duration: 2,
    delay: 0.1,
    stagger: 0.5,
})


// main-page section big text animation right side


gsap.from(".right-box-txt h1", {
    opacity: 0,
    y: -100,
    delay: 0.2,
    duration: 2,
    stagger: 0.9,
})

gsap.to(".left-txt-sec h2", {
    opacity: 1,
    y: -100,
    delay: 0.2,
    duration: 2,
    stagger: 0.7,
})

const ticker = document.querySelector(".moving-line-txt");
const tickerWidth = ticker.offsetWidth;

gsap.to(ticker, {
    x: `-${tickerWidth}px`,
    duration: 30,
    repeat: -1,
    ease: "linear"
});

gsap.from(".right-sec-2 img", {
    y: -20,
    duration: 2,
    delay: 1,
    scrollTrigger: {
        trigger: ".right-sec-2",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
    }
});