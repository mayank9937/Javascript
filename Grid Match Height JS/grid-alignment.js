window.setGridHeight = (selector) => {
  this.heightArray = [];
  this.offsetArrayArray = [];
  this.sectionArray = [];

  document.querySelectorAll(selector).forEach((grid, i) => {
    var tmp = {
      index: i,
      offsetheight: grid.closest(`[data-equal]`).offsetTop,
    };
    this.offsetArrayArray.push(tmp);
  });

  this.diffrentsHeights = [];
  this.offsetArrayArray.forEach(function (e) {
    if (this.diffrentsHeights.includes(e.offsetheight) == false) {
      this.diffrentsHeights.push(e.offsetheight);
    }
  });

  this.diffrentsHeights.forEach(function (e) {
    var data = [];
    for (var i = 0; i < this.offsetArrayArray.length; i++) {
      if (this.offsetArrayArray[i].offsetheight == e) {
        data.push(this.offsetArrayArray[i]);
      }
    }

    var getAllHeightArray = [];
    data.forEach(function (ele) {
      document.querySelectorAll(selector)[ele.index].removeAttribute("style");
      getAllHeightArray.push(
        document.querySelectorAll(selector)[ele.index].offsetHeight
      );
    });

    var getMaxHeight = Math.max.apply(Math, getAllHeightArray);
    data.forEach(function (ele) {
      document.querySelectorAll(selector)[ele.index].style.minHeight =
        getMaxHeight + "px";
    });
  });
};

window.setGridHeight(
  ".custom-bundle-product-main_left .item .quantity_price-box_title h3"
);
