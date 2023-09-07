const btnDropdown = document.querySelector('.js-btn-dropdown');
const dropdown = document.querySelector('.js-dropdown')

function openDropdown(event) {
    event.preventDefault();

    dropdown.classList.toggle('active')
}

function closeDropdown() {
    dropdown.classList.remove('active')
}

btnDropdown.addEventListener('click', openDropdown)

btnDropdown.addEventListener('mouseleave', openDropdown)


const header = document.getElementById('js-header')

function fixedMenu() {
     if(document.documentElement && document.documentElement.scrollTop > 80) {
        header.classList.add('fixed-menu')
     } else {
        header.classList.remove('fixed-menu')
     } 
}

 document.addEventListener('scroll', fixedMenu);


 const btnMobile = document.getElementById('js-btn-menu-mobile')
 const overlayMobile = document.querySelector('.js-overlay')

 function openMobile() {
   document.documentElement.classList.toggle('menu-opened')
 }

 btnMobile.addEventListener('click', openMobile);

 overlayMobile.addEventListener('click', openMobile)