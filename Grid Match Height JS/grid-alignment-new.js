/**
 * Grid alignment Script
 */
{
  window.setGridHeight = (selector) => {
    let gridOffsets = [];
    let gridRowOffsets = []

    gridOffsets = Array.from(document.querySelectorAll(selector)).map((element,index) => {
      let grid = element.closest('.grid__item') || element.closest('[data-equal]');
      element.removeAttribute('style');
      return {
        selector:element,
        selectorHeight: element.offsetHeight,
        offsetTop: grid.offsetTop,
      }
    });

    let offsets = gridOffsets.map(element => element.offsetTop);
    gridRowOffsets = [...new Set(offsets)];

    gridRowOffsets.forEach(rowOffset => {
      let rowGrids = gridOffsets.filter(grid => (grid.offsetTop == rowOffset));
      let comanElementHeight = Math.max.apply(Math,(rowGrids.map(ele => ele.selectorHeight)));
      rowGrids.forEach(grid => {
        grid.selector.style.minHeight = comanElementHeight+'px';
      });
    });
  }

 setTimeout(() => {
    matchHeightCallback();
  }, 2000)
  
  window.addEventListener('resize', function(event){
    matchHeightCallback();
  });

  let matchHeightCallback = () => {
    window.setGridHeight('.product-card-wrapper .card__heading'); 
  }
  matchHeightCallback();
}
