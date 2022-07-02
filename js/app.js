// Провірка поддержка webp, додавання класу webp або no-webp для HTML 
function isWebp() {
    // Провірка підтримки webp 
    function testWebP(callback) {

        var webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    // Додавання класу _webp або _no-webp для HTML
    testWebP(function (support) {
    
        if (support == true) {
            document.querySelector('body').classList.add('webp');
        } else {
            document.querySelector('body').classList.add('no-webp');
        }
    });
}


//-------------------------------------------------------------

function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();

//-------------------------------------------------------------

//menu burger
const iconMenu = document.querySelector('.nav__icon');
const menuBody = document.querySelector('.header__nav');
if (iconMenu) {
    
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

//-------------------------------------------------------------

let body = document.querySelector('body');
let header = document.querySelector('.header');
let buttonFloorplan = document.querySelector('.certification__floorplan')
let popup = document.querySelector('.popup');
let popupContent = document.querySelector('.popup__content');
let popupClose = document.querySelector('.popup__close');

const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';


if(buttonFloorplan) {
    buttonFloorplan.addEventListener('click', (e) => {
        e.preventDefault();
        if(!buttonFloorplan.closest('._disabled')) {
            popup.classList.add('_open');
            body.classList.add('_lock');
            body.style.paddingRight = lockPaddingValue;
            header.style.paddingRight = lockPaddingValue;
            buttonFloorplan.classList.add('_disabled')
        }
    })
}

if(popup){
    popup.addEventListener('click', (e) => {
        let target = e.target;
        if(target == popupContent || target == popupClose){
            popup.classList.remove('_open');
           
            setTimeout(()=>{
                body.classList.remove('_lock');
                body.style.paddingRight = '0px';
                header.style.paddingRight = '0px';
                buttonFloorplan.classList.remove('_disabled')
            }, 800);
        }
    })
    
}
 

//-----------------------------------------------------------------

function allowNumbersOnly(e) {
	var code = (e.which) ? e.which : e.keyCode;
	if (code > 31 && (code < 48 || code > 57)) {
			e.preventDefault();
	}
}

function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}


let inputNumber = document.querySelectorAll('.input__number');
let inputEmail = document.querySelector('.input__email');
let letterFormButton = document.querySelector('.letter__form__button');
let obligated = document.querySelectorAll('.obligated');
let letterForm = document.querySelector('.letter__form');
let successSubmit = document.querySelector('.success-submit');
let actionsCheckbox = document.querySelector('.actions__checkbox');

if(inputNumber){
    inputNumber.forEach(item => {
        item.addEventListener('keypress', (e) => {
            allowNumbersOnly(e);
        });
    })
}

if (letterFormButton) {
    letterFormButton.addEventListener('click', (e) => {
        e.preventDefault();

        for (let i = 0; i < obligated.length; i++){

            obligated[i].classList.remove('_error');
    
            if (!obligated[i].value){
                obligated[i].classList.add('_error');
            }
        }
    
        if (emailTest(inputEmail)) {
            inputEmail.classList.add('_error');
        }

        let check = [...obligated].every(function(input){
            if(!input.classList.contains('_error') == true){
                return true;
            } else {
                return false;
            }
        })

        if (!actionsCheckbox.checked) {
            actionsCheckbox.classList.add('_error');
        }

        if(check == true && actionsCheckbox.checked){
            letterForm.style.display = 'none';
            successSubmit.style.display = 'block';

            document.querySelector('.anchor').scrollIntoView({
                behavior: "auto",
                block: 'start',
            })
        }
    
    })

}





