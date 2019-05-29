export let data_calc = {};

function modalCalc() {

    let popupCalc = document.querySelector('.popup_calc '),
        popupCalcProfile = document.querySelector('.popup_calc_profile'),
        popupCalcEnd = document.querySelector('.popup_calc_end'),
        body = document.querySelector("body"),
        balconIcons = document.querySelector('.popup_calc_content'),
        type = document.querySelectorAll('.type'),
        type1 = document.querySelectorAll('.typeElem'),
        type2 = document.querySelectorAll('.typeE'),
        input = document.querySelectorAll('.form-control'),
        width = document.getElementById('width'),
        height = document.getElementById('height'),
        material = document.getElementById("view_type"),
        temp = document.getElementsByName('checkbox-test');

    let showModalCalc = function () {
        popupCalc.style.display = "block";
        document.body.style.overflow = "hidden";
    };
    let showModalCalcProfile = function () {
        popupCalcProfile.style.display = "block";
        document.body.style.overflow = "hidden";
    };
    let showModalCalcEnd = function () {
        popupCalcEnd.style.display = "block";
        document.body.style.overflow = "hidden";
    };

    let hideModal = function () {
        popupCalc.style.display = "none";
        document.body.style.overflow = "";
    };
    let hideModalProfile = function () {
        popupCalcProfile.style.display = "none";
        document.body.style.overflow = "";
    };
    let hideModalEnd = function () {
        popupCalcEnd.style.display = "none";
        document.body.style.overflow = "";
    };


    let total = {};

    let w = width,
        h = height,
        t;

    function calcTotal() {

        let typeWindow;

        type2.forEach(e => {
            if (e.classList.contains('do_image_more')) {
                typeWindow = e.getAttribute('id');
            }
        });

        temp.forEach((e, i) => {
            if (temp[i].checked) {
                t = temp[i].getAttribute('temp');
            }
        });

        total.width = w.value;
        total.heigh = h.value;
        total.type2 = typeWindow;
        total.material = material.value;
        total.temp = t;

        data_calc = total;
    }

    function clearInputs() {
        [...input].forEach(elem => (elem.value = ""));
    }

    body.addEventListener("click", function forEach(elem) {
        let target = elem.target;

        if (target && target.classList.contains("popup_calc_btn")) {
            showModalCalc(target);
        }
        if (target && target.classList.contains("popup_calc_button")) {
            if ((w.value || h.value) && (w.value != 0 && h.value != 0)) {
                calcTotal();
                hideModal(target);
                showModalCalcProfile(target);
            }
        }
        if (target && target.classList.contains("popup_calc_profile_button")) {
            if (temp[0].checked || temp[1].checked) {
                calcTotal();
                hideModalProfile(target);
                showModalCalcEnd(target);
            }

        }

        if (target && target.classList.contains("popup_calc_closes", 'popup_calc')) {
            hideModal(target);

        }
        if (target && target.classList.contains("popup_calc_profile_closes")) {
            total = {};
            data_calc = {};
            hideModalProfile(target);
            clearInputs();
            material.options[0].selected = true;
        }
        if (target && target.classList.contains("popup_calc_end_closes")) {
            total = {};
            data_calc = {};
            hideModalEnd(target);
            clearInputs();
            material.options[0].selected = true;
        }
        if (target && target.classList.contains("popup_calc_end_close")) {
            total = {};
            data_calc = {};
            hideModalEnd(target);
            clearInputs();
            material.options[0].selected = true;
        }

    });

    let hideTabf = (f) => {
        for (let i = f; i < type1.length; i++) {
            type1[i].classList.remove('show');
            type1[i].classList.add('hide');
            type1[i].classList.add('text-center');

        }
    };

    hideTabf(1);

    let showTabg = (g) => {
        if (type1[g].classList.contains('hide')) {
            type1[g].classList.remove('hide');
            type1[g].classList.add('show');
            type1[g].classList.add('text-center');
        }
    };
    let balconIconss = document.querySelectorAll('.typeE');
    let hideTabc = (c) => {
        for (let i = c; i < type.length; i++) {
            balconIconss[i].classList.remove('.do_image_more');
            balconIconss[i].classList.add('doimage_more');

        }
    };

    hideTabc(1);

    let showTabv = (v) => {
        if (balconIconss[v].classList.contains('doimage_more')) {
            balconIconss[v].classList.remove('doimage_more');
            balconIconss[v].classList.add('do_image_more');

        }
    };

    balconIcons.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('type') || target.classList.contains('typeE')) {
            for (let i = 0; i < type.length, i < balconIconss.length; i++) {
                if (target == type[i] || target == balconIconss[i]) {

                    hideTabc(0);
                    showTabv(i);
                    hideTabf(0);
                    showTabg(i);
                    break;
                }
            }
        }
    });



}

export default modalCalc;
