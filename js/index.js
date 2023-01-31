let archive = document.querySelector('.archive');
let popup = document.querySelector('.popup');
let close = document.querySelector('.close-button');


archive.addEventListener('click', () => {
 popup.classList.add('active')
})

close.addEventListener('click', () => {
 popup.classList.remove('active')
})