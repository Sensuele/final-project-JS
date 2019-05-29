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
			const typeWindowCalc = event.target.parentNode.getAttribute('class');
			bigImg.forEach(el => {
				const typeSelectedWindow = el.getAttribute('id');
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
	

	// отправка данных 
	let message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся!',
    failure: 'Что-то пошло не так...',
  };
  let 
      input = document.getElementsByTagName('input'),
      form = document.querySelectorAll('.popup_calc_end form'),
      statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      

  let sendForm = (data) => {
    data.addEventListener('submit', (e) => {
      e.preventDefault();
      data.appendChild(statusMessage);

      let formData = new FormData(data);

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

}

module.exports = calc;