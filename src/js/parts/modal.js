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
  let openModal = () => {
    popup.style.display = 'block';
    document.body.style.overflow = 'hidden';
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