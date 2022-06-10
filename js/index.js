const favicons = ['img/favicon0.ico', 'img/favicon1.ico', 'img/favicon2.ico', 'img/favicon3.ico'];
const favicon = document.querySelector('[rel=icon]');
let counter = 0;

function icon() {
    favicon.href = favicons[counter];
    counter = (counter+1) % 4;
}

setInterval(icon, 300);