let email = document.getElementById('email');
const button = document.getElementById('mark');

setTimeout(function () {
    email.style.display = "block";
}, 10000);

button.addEventListener('click', function () {
    email.style.display = 'none';
})


document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        email.style.display = 'none';
    }
});
/*------------------------------*/

let footerDate = document.querySelector('#year')
let date = new Date().getFullYear();
footerDate.innerHTML = date

/*---------------------------------*/

let bars = document.getElementById('bars');
let menu = document.getElementById('menu');
let menuItem = document.querySelectorAll('#menu a');

bars.addEventListener('click', () => {
    menu.classList.toggle('show');
});

menuItem.forEach(Item => {
    Item.addEventListener('click', () => {
        menu.classList.remove('show');
    });
})







/************************************************* */

let chaussures = document.querySelectorAll('#small a img');
let images = document.getElementById('small');
console.log('images');


/*--------------------------------------------------*/

let i = 1;

let num = document.getElementById('count');

num.innerText = i;


let plus = document.getElementById('ajouter');

plus.addEventListener('click', () => {
    if (i < 20) {
        count.innerText = i + 1
        i += 1
    }
})

let moins = document.getElementById('retirer');

moins.addEventListener('click', () => {
    count.innerText = i - 1
    i -= 1
    if (i == 0) {
        i = 1
    }
})