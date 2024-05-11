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

    console.log(gridRowOffsets,gridOffsets)
    gridRowOffsets.forEach(rowOffset => {
      let rowGrids = gridOffsets.filter(grid => (grid.offsetTop == rowOffset));
      let comanElementHeight = Math.max.apply(Math,(rowGrids.map(ele => ele.selectorHeight)));
      rowGrids.forEach(grid => {
        grid.selector.style.minHeight = comanElementHeight+'px';
      });
    });
  }

  window.setGridHeight('.product-card-wrapper .card__heading'); 
  
  setTimeout(() => {
    window.setGridHeight('.product-card-wrapper .card__heading');
  }, 2000)
  
  window.addEventListener('resize', function(event){
    window.setGridHeight('.product-card-wrapper .card__heading');
  });
}