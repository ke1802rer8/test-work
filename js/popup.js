const popupLinks = document.querySelectorAll('.popup-link');
let unlock = true;


if( popupLinks.length > 0){
    for(let index = 0; index < popupLinks.length; index++){
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e) {
            
            popupOpen();
            e.preventDefault();
        });
    }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if(popupCloseIcon.length > 0){
    for(let index = 0; index < popupCloseIcon.length; index++){
        const el = popupCloseIcon[index];
        el.addEventListener('click', function(e){
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

function popupOpen(){
    if(unlock){
        const popupActive = document.querySelector('.popup.open');
        if(popupActive){
            popupClose(popupActive);
        }         
    }
} 

function popupClose(popupActive){      
    popupActive.classList.remove('open');      
}