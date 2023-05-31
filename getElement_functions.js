function getElement(selector, wrapper = null) {
  return wrapper != null
    ? typeof wrapper == "object"
      ? wrapper.querySelector(selector)
      : document.querySelector(wrapper).querySelector(selector)
    : document.querySelector(selector);
}
function getElements(selector, wrapper = null) {
  return wrapper != null
    ? typeof wrapper == "object"
      ? wrapper.querySelectorAll(selector)
      : document.querySelector(wrapper).querySelectorAll(selector)
    : document.querySelectorAll(selector);
}

/********************************************************************
 ************************* Examples *********************************
 ********************************************************************
 *
 * getElement('.btn');
 * getElement('.btn',getElement('.btn-wrapper'));
 * getElement('.btn','.btn-wrapper');
 *
 * getElements('.btn');
 * getElements('.btn',getElement('.btn-wrapper'));
 * getElements('.btn','.btn-wrapper');
 *
 ********************************************************************
 ********************************************************************
 */
