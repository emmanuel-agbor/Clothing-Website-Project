document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const menu = document.getElementById('menu');

    if (burger && menu) {
        burger.addEventListener('click', () => {
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        });
    }
});

/*const burger=document.querysSelector('burger');
const menu=document.querySelector('menu');

burger.addEventListener('click', () => {
if(menu.classList.contains('hidden')){
    menu.classList.remove('hidden');
} else{
    menu.classList.add('hidden');
}
});*/