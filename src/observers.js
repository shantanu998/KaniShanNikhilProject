const faders = document.querySelectorAll(".fade-in");
console.log("hi");

const appearOptions = {
  //threshold: 0,
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    console.log("hi");
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  console.log("hi");
  appearOnScroll.observe(fader);
});
