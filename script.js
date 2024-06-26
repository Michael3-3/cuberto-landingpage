Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hdr", {
  videos: [
    "https://cdn.cuberto.com/cb/home/hero/1.mp4",
    "https://cdn.cuberto.com/cb/showreel/2.mp4",
    "https://cdn.cuberto.com/cb/projects/puntopago/cover.mp4",
  ],
});

gsap.to(".fleftelm", {
    scrollTrigger: {
      trigger: "#fimages",
      pin:true,
      start: "top top",
      end: "bottom bottom",
      endTrigger:".last",
      scrub: 1
    },
    y: "-300%",
    ease: Power1
  });


