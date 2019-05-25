function tabs() {

	let info = document.querySelector(".info"),
      tabContent = document.querySelectorAll(".tabcontent_glazing"),
      tab = document.querySelectorAll(".glazing_block");
      

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

	
}

module.exports = tabs;