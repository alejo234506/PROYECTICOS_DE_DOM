// Regresa a la página principal en la misma pestaña (antes abría una pestaña nueva en cada clic).
const botonRegresar = document.getElementById('devuelveme');

botonRegresar.addEventListener('click', () => {
    window.location.href = './index.html';
});
