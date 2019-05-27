function modal() {
  
//   let popup = document.querySelector('.popup'),
//       content = document.querySelector('.popup_content'),
//       close = document.querySelector('.popup_close'),
//       popupEngineer = document.querySelector('.popup_engineer'),
//       popupEngineerBtn = document.querySelector(".popup_engineer_btn");

//   // Модальное окно через 60 сек.
//   let  showModal = () => {
//       popup.style.display = 'block';
//       document.body.style.overflow = 'hidden';

//     popup.addEventListener('click', (e) => {
//       let target = e.target;
        
//       if (!content.contains(target) || close.contains(target)) {
//           popup.style.display = 'none';
//           document.body.style.overflow = '';
//       } else {
//           popup.style.display = 'block';
//           document.body.style.overflow = 'hidden';
//       }
//     });
//   };
//   setTimeout(showModal, 60000);

//   //  Модальное окно на кнопку "Вызвать замерщика"
//   popupEngineerBtn.addEventListener('click', () => {
//     popupEngineer.style.display = 'block';
//     document.body.style.overflow = 'hidden';
//   });
//   // Закрыть модальное окно
//   popupEngineer.addEventListener('click', (e) => {
//     let target = e.target;
      
        
//       if (!content.contains(target) || close.contains(target)) {
//         popupEngineer.style.display = 'none';
//         document.body.style.overflow = '';
//     } else {
//       popupEngineer.style.display = 'block';
//         document.body.style.overflow = 'hidden';
//     }
//   });

}

module.exports = modal;