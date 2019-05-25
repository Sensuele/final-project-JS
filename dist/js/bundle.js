/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {

	let info = document.querySelector(".info"),
      tabContent = document.querySelectorAll(".tabcontent_glazing"),
      tab = document.querySelectorAll(".glazing_block"),
      decorContent = document.querySelectorAll(".tabcontent_decoration"),
      tabDecor = document.querySelectorAll(".decoration_tab"),
      header = document.querySelector(".decoration_header");
      

      // табы для блока "ОСТЕКЛЕНИЕ БАЛКОНОВ И ЛОДЖИЙ"
	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove("show");
			tabContent[i].classList.add("hide");
		}
		for (let i = a; i < tab.length; i++) {
			tab[i].classList.remove('active');
			tab[i].classList.add('no_active');
		}
	}
	hideTabContent(1);

	function showTabContent(b) {
		if (tabContent[b].classList.contains("hide")) {
			tabContent[b].classList.remove("hide");
			tabContent[b].classList.add("show");
		}
		if (tab[b].classList.contains("no_active")) {
			tab[b].classList.remove("no_active");
			tab[b].classList.add("active");
		}
	}
  info.addEventListener('click', (e) => {
    let target = e.target;
    if (target && target.classList.contains("glazing_block") || target.parentNode.classList.contains("glazing_block")) {
      tab.forEach(function (e, i) {
				if (target == e || target.parentNode == e) {
					hideTabContent(0);
					showTabContent(i);
				}
			});
    }
  });

  // Табы для блока с отделкой
  function hideDecorContent(a) {
    for (let i = a; i < decorContent.length; i++) {
      decorContent[i].classList.remove("show");
      decorContent[i].classList.add("hide");
    }
    for (let i = a; i < tabDecor.length; i++) {
      tabDecor[i].classList.remove("after_click");
      tabDecor[i].classList.add("no_click");
    }
  }
  hideDecorContent(1);

  function showDecorContent(b) {
    if (decorContent[b].classList.contains("hide")) {
      decorContent[b].classList.remove("hide");
      decorContent[b].classList.add("show");
    }
    if (tabDecor[b].classList.contains("no_click")) {
      tabDecor[b].classList.remove("no_click");
      tabDecor[b].classList.add("after_click");
    }
  }
  header.addEventListener("click", (e) => {
    let target = e.target;
      if (target && target.classList.contains("decoration_tab") || target.parentNode.classList.contains("decoration_tab")) {
        tabDecor.forEach(function (e, i) {
          if (target == e || target.parentNode == e) {
            hideDecorContent(0);
            showDecorContent(i);
          }
        });
      }
  });
}

module.exports = tabs;

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

let timer = () => {
  let deadline = '2019-05-29 ';

  let getTimeRemaining = (endtime) => {
    let t = Date.parse(endtime) - Date.parse(new Date()),
    seconds = Math.floor((t/1000) % 60),
    minutes = Math.floor((t/1000/60) % 60),
    hours = Math.floor((t/(1000*60*60) % 24)),
    days = Math.floor((t / (1000 * 60 * 60 * 24)));

    return {
      'total' : t,
      'days' : days,
      'hours' : hours,
      'minutes' : minutes,
      'seconds' : seconds
    };
  };

  let setClock = (id, endtime) => {
    let timer = document.getElementById(id),
        days = timer.querySelector("#days"),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);
    
    function updateClock() {
      let t = getTimeRemaining(endtime);
      days.textContent = t.days;
      hours.textContent = t.hours;
      minutes.textContent = t.minutes;
      seconds.textContent = t.seconds;

      // подставляем 0 перед значениями, которые состоят из одной цифры
      if (days.textContent < 10){
        days.textContent = '0' + t.days;
      }
      if (hours.textContent < 10){
      hours.textContent = '0' + t.hours;
      }
      if (minutes.textContent < 10){
        minutes.textContent = '0' + t.minutes;
      }
      if (seconds.textContent < 10){
        seconds.textContent = '0' + t.seconds;
      }  
      // если дата уже прошла выводится: 00:00:00 
      if (t.total <= 0) {
        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
        clearInterval(timeInterval);
      } 
    }     
  };
  setClock('timer', deadline);
};

module.exports = timer;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parts_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts/tabs */ "./src/js/parts/tabs.js");
/* harmony import */ var _parts_tabs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_parts_tabs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _parts_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/timer */ "./src/js/parts/timer.js");
/* harmony import */ var _parts_timer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_parts_timer__WEBPACK_IMPORTED_MODULE_1__);
// import modal from "./parts/modal";
// import {calc} from "./parts/calc";



window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  
  // modal();
  // calc();
  _parts_tabs__WEBPACK_IMPORTED_MODULE_0___default()();
  _parts_timer__WEBPACK_IMPORTED_MODULE_1___default()();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map