import { $Qll } from "./query-selector";

/**
 * Move to scroll in X
 * @param {String} node classes to wrapper in scrollX
 * 
 * @return {Function}
 */

export const moveToMouse = (wrapper) => {
  const sliderTouch = $Qll(wrapper);
  let isDown = false;
  let startX;
  let scrollLeft;
  
  for (let slider of sliderTouch) {
    eventsMouse({ slider, isDown, startX, scrollLeft })
  }
}

/**
 * Interaction with the mouse
 * @param {Object} param0
 * Slider: {HTMLElements} - Elements to manipulate DOM with the mouse
 * isDown: {Boolean} - Check if mouse down slider
 * startX: {Number} - Position start in x
 * scrollLeft: {Number} - Translate with the mouse scroll
 */
function eventsMouse({
  slider,
  isDown,
  startX,
  scrollLeft
}) {
  slider.addEventListener("mousedown", e => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
  });

  slider.addEventListener("mousemove", e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX;
    slider.scrollLeft = scrollLeft - walk;
  });
}