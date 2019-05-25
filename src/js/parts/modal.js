// function modal() {
// 	let modalPopup = document.querySelector(".popup"),
// 		engPopup = document.querySelector(".popup_engineer"),
// 		body = document.querySelector("body"),
// 		overlayPic = document.createElement("div");

// 	body.appendChild(overlayPic);
// 	overlayPic.classList.add('bigPicture', 'overlay', 'animated', 'fadeIn');

// 	let overlay = document.querySelectorAll(".overlay");

// 	function showModal(modal) {
// 		modal.style.display = "block";
// 		document.body.style.overflow = "hidden";
// 	}
// 	setTimeout(function openMod() {
// 		showModal(modalPopup);
// 	}, 60000);

// 	function hideModal(modCloseBtn) {
// 		[...overlay].forEach(element => {
// 			element.style.display = "none";
// 		});
// 		document.body.style.overflow = "";

// 		let statusMessage = document.querySelector('.status');
// 		if (statusMessage != undefined) {
// 			statusMessage.innerHTML = '';
// 		}
// 	}

// 	function bigPictures(picture) {
// 		let pic = picture.parentNode.href;
// 		overlayPic.innerHTML = `<img src='${pic}'>`;
// 		showModal(overlayPic);
// 	}

// 	body.addEventListener("click", e => {

// 		let target = e.target;
// 		if (target && target.classList.contains("header_btn")) {
// 			e.preventDefault();
// 			showModal(engPopup);
// 		}
// 		if (target && target.classList.contains("phone_link")) {
// 			e.preventDefault();
// 			showModal(modalPopup);
// 		}
// 		if (target && target.classList.contains("close_btn") || target.classList.contains("overlay")) {
// 			hideModal(target);
// 		}
// 		if (target && target.classList.contains("lupa") || target.classList.contains("small_picture")) {
// 			e.preventDefault();
// 			bigPictures(target);
// 		}
// 	});
// }

// export default modal;