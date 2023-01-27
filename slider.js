const slider = $(".slider");
slider.slick({
  autoplay: true,
  arrows: false,
  dots: false,
  pauseOnHover: true,
  slidesToShow: 3,
  centerPadding: "10px",
  draggable: false,
  variableWidth: true,
  infinite: true,
  swipe: false,
  touchMove: false,
  vertical: false,
  speed: 1000,
  autoplaySpeed: 2000,
  useTransform: true,
  cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
  adaptiveHeight: true,
  onAfterChange: function () {
    console.log("hello");
  },
});

slider.on("afterChange", function () {
  for (let i = 0; i < slides.length; i++) {
    if (
      slides[i].className === "slide slick-slide slick-current slick-active"
    ) {
      let width = 12.5 * (i + 1);
      progresBar.style.width = `${width}%`;
    }
  }
});