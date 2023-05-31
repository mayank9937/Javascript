customElements.define(
  "matchheight-grid-list",
  class matchHeightGridList extends HTMLElement {
    constructor() {
      super();
      this.init();
    }
    init() {
      let productGrids = this.querySelectorAll("matchheight-grid-item"),
        gridPositions = [],
        positionGrids = [];
      if (productGrids.length == 0) return;

      productGrids.forEach(function (grid) {
        if (gridPositions.indexOf(grid.offsetTop) == -1)
          gridPositions.push(grid.offsetTop);
      });

      gridPositions.forEach(function (position) {
        let grids = Array.from(productGrids).filter(function (grid) {
          return grid.offsetTop == position;
        });
        positionGrids.push(grids);
      });

      positionGrids.forEach((grids, index) => {
        let heights = [];
        grids.forEach(function (grid) {
          let tmp = [];
          grid.querySelectorAll(".js-height").forEach(function (element) {
            element.style.removeProperty("min-height");
            tmp.push(element.offsetHeight);
          });
          heights.push(tmp);
        });
        if (heights.length > 0) {
          let totalSelector = Math.max(
            ...heights.map((ele) => {
              return ele.length;
            })
          );
          grids.forEach(function (grid) {
            for (let index = 0; index < totalSelector; index++) {
              let elementHeights = Math.max(
                ...heights.map((ele) => {
                  return ele[index];
                })
              );
              grid.querySelectorAll(".js-height")[
                index
              ].style.minHeight = `${elementHeights}px`;
            }
          });
        }
      });
    }
  }
);

function reinitAllGrids() {
  document.querySelectorAll("matchheight-grid-list").forEach((ele) => {
    ele.init();
  });
}
window.onresize = () => {
  reinitAllGrids();
};
window.onload = () => {
  reinitAllGrids();
};

/**********************************************************************************
 ************************************* EXAMPLE ************************************ 
 **********************************************************************************


<matchheight-grid-list>
    -- .... --
    <ul>
        -- .... -- 
        <li>
            <matchheight-grid-item>
            -- .... --
                Grid Content
                <span class="js-height" ></span>
                <h3 class="js-height" ></h3>
                <img class="js-height" />
            -- .... --
            </matchheight-grid-item>
        </li>
        -- .... --
    </ul>
    -- .... --
</matchheight-grid-list>


***********************************************************************************/
