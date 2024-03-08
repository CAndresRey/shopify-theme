import "../scss/main.scss";

import { loadSlider } from "../components/slider-component";
import { headerFooterDefer } from "../components/header-footer-defer";
import { sectionsLoadDefer } from "../components/sections-defer";
import initWindows from "../components/window";
import { initializeQuiz } from "../components/quiz";

headerFooterDefer();
loadSlider();
sectionsLoadDefer();
initializeQuiz();

initWindows({
  control: '#burger-nav-js',
  target: '#nav-list-movil-js',
});
