const favicons = ['img/favicon0.ico', 'img/favicon1.ico', 'img/favicon2.ico', 'img/favicon3.ico'];
const favicon = document.querySelector('[rel=icon]');
let counter = 0;

function icon() {
    favicon.href = favicons[counter];
    counter = (counter + 1) % 4;
}

setInterval(icon, 300);


const lightbox = document.getElementById('lightbox');
const logo = document.getElementById('logo')
logo.addEventListener('click', () => turnLightbox())

const turnLightbox = () => {
    lightbox.classList.toggle('lightbox-hidden');
    lightbox.classList.toggle('lightbox');
}

const body = document.getElementById('body');
body.addEventListener('click', (e) => {
    // console.log(e.target)
    if (e.target.matches('#close') || e.target.matches('#lightbox')) {
        lightbox.classList.toggle('lightbox-out');
        setTimeout(() => {
            lightbox.classList.toggle('lightbox-out');
            lightbox.classList.toggle('lightbox-hidden');
            lightbox.classList.toggle('lightbox')
        }, 1000);
    }
});

const sideMenu = document.getElementById('side-menu')
const menuBtn = document.querySelector('.menu-btn')
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open')
    sideMenu.classList.toggle('active')
})

setTimeout(turnLightbox, 1000);