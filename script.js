var contentNav = document.getElementById('headNav');
window.addEventListener('scroll', ()=>{
    var scroll = window.scrollY
    if(scroll > 10){
        contentNav.style.backgroundColor = '#FFFFFF'
    }else{
        contentNav.style.backgroundColor = 'transparent'
    }
})


// Obtener elementos del DOM
const modal = document.getElementById('contactModal');
const openLink = document.getElementById('openModalLink');
const closeBtn = modal.querySelector('.close');

// Función para abrir el modal
function openModal(event) {
    event.preventDefault(); // Evita que el enlace recargue la página
    modal.style.display = 'block';
}

// Función para cerrar el modal
function closeModal() {
    modal.style.display = 'none';
}

// Evento de clic para abrir el modal al hacer clic en el enlace
openLink.addEventListener('click', openModal);

// Evento de clic para cerrar el modal al hacer clic en el botón de cerrar
closeBtn.addEventListener('click', closeModal);

// Evento de clic para cerrar el modal al hacer clic fuera del contenido del modal
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});
