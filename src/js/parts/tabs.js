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