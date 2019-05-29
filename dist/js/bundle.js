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

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc() {
  
  let popupCalcBtn = document.querySelectorAll('.popup_calc_btn'), 
      popupCalc = document.querySelector('.popup_calc'),
      balconIcons = document.querySelectorAll('.balcon_icons a'), 
      bigImg = document.querySelectorAll('.big_img img'), 
      popupCalcButton = document.querySelector('.popup_calc_button'), 
      popupCalcProfile = document.querySelector('.popup_calc_profile'), 
      popupCalcProfileButton = document.querySelector('.popup_calc_profile_button'), 
      popupCalcEnd = document.querySelector('.popup_calc_end'), 
      popupCalcInput = popupCalc.querySelectorAll('input'),
      popupCalcSelect = document.querySelector('select'),
      popupCalcLabel = popupCalcProfile.querySelectorAll('label'),
      calcClose = document.querySelector('.popup_calc_close'),
      endClose = document.querySelector('.popup_calc_end_close'),
      profileClose = document.querySelector('.popup_calc_profile_close'),
      data = {};


	popupCalcBtn.forEach(e => {
		e.addEventListener('click', () => {
			popupCalc.style.display = "block";
			data.type = balconIcons[0].getAttribute('class');
			document.body.style.overflow = "hidden";
		});
	});


	balconIcons.forEach(element => {		
		element.addEventListener('click', (event) => {
      balconIcons.forEach( img => {
				img.querySelector('img').classList.remove('do_image_more');
			});
			event.preventDefault();
			document.body.style.overflow = "hidden";
			let typeWindowCalc = event.target.parentNode.getAttribute('class');
			bigImg.forEach(el => {
				let typeSelectedWindow = el.getAttribute('id');
				if (typeSelectedWindow == typeWindowCalc) {
					el.style.display = 'inline-block';
					data.type = typeWindowCalc;					
				} else {
					el.style.display = 'none';
				}
			});
			element.querySelector('img').classList.add('do_image_more');
		});
	});


	popupCalcInput.forEach(input => {
		input.addEventListener('input', function () {
			this.value = this.value.replace(/[^0-9]+/g, '');
		});
	});


	popupCalcButton.addEventListener('click', () => {
		document.body.style.overflow = "hidden";
		if (popupCalcInput[0].value && popupCalcInput[1].value) {
			popupCalc.style.display = 'none';
			popupCalcProfile.style.display = 'block';
			data.width = popupCalcInput[0].value;
			popupCalcInput[0].value = '';
			data.heigh = popupCalcInput[1].value;
			popupCalcInput[1].value = '';
			data.glazingType = popupCalcSelect.options[0].value;
			
		} else {
			popupCalcInput.forEach(input => {
				if (!input.value) {
					input.focus();
				}
			});
		}
	});


	popupCalcSelect.addEventListener('change', function () {
		data.glazingType = this.options[this.selectedIndex].value;
	});


	popupCalcLabel.forEach(label => {
		label.addEventListener('change', event => {
			if (event.target.classList.contains('checkbox')) {
				[].slice.call(document.querySelectorAll('.checkbox')).forEach(c => c.checked = false);
				event.target.checked = true;
			}
			data.glazingProfile = label.querySelector('.checkbox-custom').getAttribute('id');
		});
	});


	popupCalcProfileButton.addEventListener('click', () => {
		document.body.style.overflow = "";
		if (data.glazingProfile) {
			popupCalcProfile.style.display = 'none';
			popupCalcEnd.style.display = 'block';
			document.querySelectorAll('.checkbox').forEach(c => c.checked = false);

		}
  });
  calcClose.addEventListener('click', function () {
    popupCalc.style.display = 'none';
    document.body.style.overflow = '';
  });  

  endClose.addEventListener('click', function () {
      popupCalcEnd.style.display = 'none';
      document.body.style.overflow = '';
  });

  profileClose.addEventListener('click', function () {
    popupCalcProfile.style.display = 'none';
    document.body.style.overflow = '';
  });
	

	// // отправка данных 
	// let message = {
  //   loading: 'Загрузка...',
  //   success: 'Спасибо! Скоро мы с вами свяжемся!',
  //   failure: 'Что-то пошло не так...',
  // };
  // let 
  //     input = document.getElementsByTagName('input'),
  //     form = document.querySelectorAll('.popup_calc_end form'),
  //     statusMessage = document.createElement('div');
  //     statusMessage.classList.add('status');
      

  // let sendForm = (data) => {
  //   data.addEventListener('submit', (e) => {
  //     e.preventDefault();
  //     data.appendChild(statusMessage);

  //     let formData = new FormData(data);

  //     let postData = (data) => {

  //       return new Promise((resolve, reject) => {
  //         let request = new XMLHttpRequest();

  //         request.open('POST', 'server.php');

  //         request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

  //         request.onreadystatechange = () => {
  //           if (request.readyState < 4) {
  //             resolve();
  //           } else if (request.readyState === 4) {
  //             if (request.status == 200 && request.status < 3) {
  //               resolve();
  //             } else {
  //               reject();
  //             }
  //           }
  //         };
  //         request.send(data);
  //       });
  //     }; // End postData
      

  //     let clearInput = () => {
  //       for (let i = 0; i < input.length; i++) {
  //         input[i].value = '';
  //       }
  //     };
	// 		postData(formData)
  //     .then(() => (statusMessage.innerHTML = message.loading))
  //     .then(() => (statusMessage.innerHTML = message.success))
  //     .catch(() => (statusMessage.innerHTML = message.failure))
  //     .then(clearInput);
  //   });
    
  // };    
  // form.forEach( (e) => {
	// 	sendForm(e);
	// });

}

module.exports = calc;

/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

let form = () => {
  let message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся!',
    failure: 'Что-то пошло не так...',
  };

  let 
      input = document.getElementsByTagName('input'),
      form = document.querySelectorAll('.form'),
      statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      

  let sendForm = (elem) => {
    elem.addEventListener('submit', (e) => {
      e.preventDefault();
      elem.appendChild(statusMessage);

      let formData = new FormData(elem);

      let postData = (data) => {

        return new Promise((resolve, reject) => {
          let request = new XMLHttpRequest();

          request.open('POST', 'server.php');

          request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

          request.onreadystatechange = () => {
            if (request.readyState < 4) {
              resolve();
            } else if (request.readyState === 4) {
              if (request.status == 200 && request.status < 3) {
                resolve();
              } else {
                reject();
              }
            }
          };
          request.send(data);
        });
      }; // End postData
      

      let clearInput = () => {
        for (let i = 0; i < input.length; i++) {
          input[i].value = '';
        }
      };
      postData(formData)
      .then(() => (statusMessage.innerHTML = message.loading))
      .then(() => (statusMessage.innerHTML = message.success))
      .catch(() => (statusMessage.innerHTML = message.failure))
      .then(clearInput);
    });
    
  };    
  form.forEach( (e) => {
		sendForm(e);
	});
  
};

module.exports = form;

/***/ }),

/***/ "./src/js/parts/image.js":
/*!*******************************!*\
  !*** ./src/js/parts/image.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function image() {
  let   divImage = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImgLink = document.querySelectorAll('.big_img_link'),
        bigImage = document.createElement('Img'),
        workImage = document.querySelectorAll('.work_image');

    divImage.classList.add('popup');
    workSection.appendChild(divImage);
    divImage.style.justifyContent = 'center';
    divImage.style.display = 'none';
    divImage.style.alignItems = 'center';
    divImage.appendChild(bigImage);

    workImage.forEach((item, i) => {
        item.addEventListener('click', () => {
            bigImgLink.forEach((item, a) => {
                if (i == a) {
                    bigImage.setAttribute('src', item.href);
                }
            });
        });
    });

    workSection.addEventListener('click', function(e) {
        e.preventDefault();
        let target = e.target;
        if (target && target.classList.contains('work_image')) {
            divImage.style.display = 'flex';
        }
        if (target && target.matches('div.popup')) {
            divImage.style.display = 'none';
        }
    });
}
  
  module.exports = image;

/***/ }),

/***/ "./src/js/parts/mask.js":
/*!******************************!*\
  !*** ./src/js/parts/mask.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function mask() {
  let setCursorPosition = (pos, elem) => {
      elem.focus();
  
      if (elem.setSelectionRange) {
          elem.setSelectionRange(pos, pos);
      } else if (elem.createTextRange) {
          let range = elem.createTextRange();
  
          range.collapse(true);
          range.moveEnd('character', pos);
          range.moveStart('character', pos);
          range.select();
      }
  };
  
  function Mask(event) {
      let matrix = '+7(___) ___ __ __',
          i = 0,
          def = matrix.replace(/\D/g, ''),
          val = this.value.replace(/\D/g, '');
  
      if (def.length >= val.length) {
          val = def;
      }
  
      this.value = matrix.replace(/./g, function(a) {
          return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
      });
  
      if (event.type == 'blur') {
          if (this.value.length == 2) {
              this.value = '';
          }
      } else {
          setCursorPosition(this.value.length, this);
      }
  }
      
  let input = document.querySelectorAll('[type="tel"]');
  
  for (let i = 0; i < input.length; i++) {
      input[i].addEventListener('input', Mask, false);
      input[i].addEventListener('focus', Mask, false);
      input[i].addEventListener('blur', Mask, false);
  }
}

module.exports = mask;

/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

let modal = () => {

  let headerBtn = document.querySelector('.header_btn'),
      popupEn = document.querySelector('.popup_engineer'),
      popup = document.querySelector('.popup'),
      close = document.getElementsByClassName('popup_close')[0],
      closeEn = document.getElementsByClassName('popup_close')[1],
      phoneLink = document.getElementsByClassName('phone_link');


  //  Модальное окно через 60сек

  window.setTimeout(function () {
    popup.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }, 60000);

  // модальное окно Заказать обратный звонок
  let openModal = (e) => {
    popup.style.display = 'block';
    document.body.style.overflow = 'hidden';
    e.preventDefault();
  };
  for (let i = 0; i < phoneLink.length; i++) {
    phoneLink[i].addEventListener('click', openModal);
  }
   // Закрыть модальное окно
  let closeModal = () => {
    popup.style.display = 'none';
    document.body.style.overflow = '';
  };
  close.addEventListener('click', (closeModal));
  popup.addEventListener('click', (e) => {
    if (e.target.closest('.popup_dialog')) {
    return;
  } 
  closeModal();
  });    

  // Модальное окно "Вызвать замерщика"

  let openEnModal = () => {
    popupEn.style.display = 'block';
    document.body.style.overflow = 'hidden';
  };
  headerBtn.addEventListener('click', openEnModal);

  // Закрыть модальное окно
  let closeEnModal = () => {
    popupEn.style.display = 'none';
    document.body.style.overflow = '';
  };
  closeEn.addEventListener('click', closeEnModal);
  popupEn.addEventListener('click', (e) => {
    if (event.target.closest('.popup_dialog')) {
        return;
    }
    closeEnModal();
  });
};

module.exports = modal;

/***/ }),

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
/* harmony import */ var _parts_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts/modal */ "./src/js/parts/modal.js");
/* harmony import */ var _parts_modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_parts_modal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _parts_calc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/calc */ "./src/js/parts/calc.js");
/* harmony import */ var _parts_calc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_parts_calc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _parts_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/tabs */ "./src/js/parts/tabs.js");
/* harmony import */ var _parts_tabs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_parts_tabs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _parts_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/timer */ "./src/js/parts/timer.js");
/* harmony import */ var _parts_timer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_parts_timer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _parts_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parts/form */ "./src/js/parts/form.js");
/* harmony import */ var _parts_form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_parts_form__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _parts_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parts/mask */ "./src/js/parts/mask.js");
/* harmony import */ var _parts_mask__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_parts_mask__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _parts_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parts/image */ "./src/js/parts/image.js");
/* harmony import */ var _parts_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_parts_image__WEBPACK_IMPORTED_MODULE_6__);








window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  
  _parts_modal__WEBPACK_IMPORTED_MODULE_0___default()();
  _parts_calc__WEBPACK_IMPORTED_MODULE_1___default()();
  _parts_tabs__WEBPACK_IMPORTED_MODULE_2___default()();
  _parts_timer__WEBPACK_IMPORTED_MODULE_3___default()();
  _parts_form__WEBPACK_IMPORTED_MODULE_4___default()();
  _parts_mask__WEBPACK_IMPORTED_MODULE_5___default()();
  _parts_image__WEBPACK_IMPORTED_MODULE_6___default()();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map