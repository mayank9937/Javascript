window.slideDown = function (element) {
  element.style.display = "block";
  element.style.overflow = "hidden";
  element.style.opacity = 0;
  let height = element.offsetHeight,
    count = 0;
  let slideDown = setInterval(function (params) {
    element.style.removeProperty("opacity");
    count++;
    element.style.height = count + "px";
    if (count == height) {
      clearInterval(slideDown);
      element.style.removeProperty("height");
      element.style.removeProperty("overflow");
    }
  });
};

window.slideUp = function (element) {
  let height = element.offsetHeight;
  element.style.overflow = "hidden";
  let slideDown = setInterval(function (params) {
    height--;
    element.style.height = height + "px";
    if (height == 0) {
      clearInterval(slideDown);
      element.style.display = "none";
      element.style.removeProperty("height");
      element.style.removeProperty("overflow");
    }
  });
};
