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
      windowSettings = {};


	popupCalcBtn.forEach(e => {
		e.addEventListener('click', () => {
			popupCalc.style.display = "block";
			windowSettings.type = balconIcons[0].getAttribute('class');
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
			const typeWindowCalc = event.target.parentNode.getAttribute('class');
			bigImg.forEach(el => {
				const typeSelectedWindow = el.getAttribute('id');
				if (typeSelectedWindow == typeWindowCalc) {
					el.style.display = 'inline-block';
					windowSettings.type = typeWindowCalc;					
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
			windowSettings.width = popupCalcInput[0].value;
			popupCalcInput[0].value = '';
			windowSettings.heigh = popupCalcInput[1].value;
			popupCalcInput[1].value = '';
			windowSettings.glazingType = popupCalcSelect.options[0].value;
			
		} else {
			popupCalcInput.forEach(input => {
				if (!input.value) {
					input.focus();
				}
			});
		}
	});


	popupCalcSelect.addEventListener('change', function () {
		windowSettings.glazingType = this.options[this.selectedIndex].value;
	});


	popupCalcLabel.forEach(label => {
		label.addEventListener('change', event => {
			if (event.target.classList.contains('checkbox')) {
				[].slice.call(document.querySelectorAll('.checkbox')).forEach(c => c.checked = false);
				event.target.checked = true;
			}
			windowSettings.glazingProfile = label.querySelector('.checkbox-custom').getAttribute('id');
		});
	});


	popupCalcProfileButton.addEventListener('click', () => {
		document.body.style.overflow = "";
		if (windowSettings.glazingProfile) {
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
	return windowSettings;
}

module.exports = calc;