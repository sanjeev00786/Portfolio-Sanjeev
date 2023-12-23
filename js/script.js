/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', function() {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
})

/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

let header = document.querySelector('.header');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY
        let offSet = sec.offsetTop - 150
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')

        if (top >= offSet && offSet < offSet + height) {
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector(`header nav a[href*=${id}`).classList.add('active')
            })
        }
    })

    /*========== sticky navbar ==========*/
    header.classList.toggle('sticky', window.scrollY > 100)


    /*========== remove menu icon navbar when click navbar link (scroll) ==========*/

};


/*========== swiper ==========*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: false,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }

})

/*========== dark light mode ==========*/


/*========== scroll reveal ==========*/