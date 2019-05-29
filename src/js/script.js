import modal from "./parts/modal";
import modalCalc from "./parts/modalcalc";
import tabs from "./parts/tabs";
import timer from "./parts/timer";
import form from "./parts/form";
import mask from "./parts/mask";
import image from "./parts/image";

window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  
  modal();
  modalCalc();
  tabs();
  timer();
  form();
  mask();
  image();
});