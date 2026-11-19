// Ejercicios de manipulación del DOM.

/** Devuelve un color hexadecimal aleatorio, por ejemplo "#2B807B". */
function generarColorHexAleatorio() {
    const digitos = '0123456789ABCDEF';
    let colorHex = '#';
    for (let i = 0; i < 6; i++) {
        colorHex += digitos[Math.floor(Math.random() * 16)];
    }
    return colorHex;
}

/** Devuelve un color de texto (oscuro o blanco) que contraste con el fondo dado. */
function colorDeTextoPara(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const luminancia = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminancia > 0.55 ? '#1d1a17' : '#ffffff';
}

// 1. Color de fondo de la página
const codigoFondo = document.getElementById('color');
document.getElementById('boton-color').addEventListener('click', () => {
    const color = generarColorHexAleatorio();
    codigoFondo.textContent = color;
    document.body.style.backgroundColor = color;
});

// 2. Color del texto
const palabra = document.getElementById('palabra');
document.getElementById('boton-texto').addEventListener('click', () => {
    palabra.style.color = generarColorHexAleatorio();
});

// 3. Tamaño de letra aleatorio (entre 16 y 48 px)
const tamano = document.getElementById('tamano');
document.getElementById('boton-tamano').addEventListener('click', () => {
    tamano.style.fontSize = `${Math.round(Math.random() * 32 + 16)}px`;
});

// 4. Color de una tarjeta concreta
const cartaColor = document.getElementById('carta-color');
const codigoCarta = document.getElementById('codigo-carta');
document.getElementById('boton-carta').addEventListener('click', () => {
    const color = generarColorHexAleatorio();
    codigoCarta.textContent = color;
    cartaColor.style.backgroundColor = color;
    cartaColor.style.color = colorDeTextoPara(color);
});

// 5. Opacidad del texto (mínimo 10 % para que no desaparezca del todo)
const cielo = document.getElementById('cielo');
const opacidad = document.getElementById('opacidad');
document.getElementById('boton-opacidad').addEventListener('click', () => {
    const valor = Math.random() * 0.9 + 0.1;
    cielo.style.opacity = valor;
    opacidad.textContent = `${Math.round(valor * 100)}%`;
});
