const openBtn = document.getElementById('open');

const modal_container = document.getElementById('modal_container');

const closeBtn = document.getElementById('close');

openBtn.addEventListener('click', () => {
    modal_container.classList.add('show');
})

closeBtn.addEventListener('click', () => {
    modal_container.classList.remove('show');
})