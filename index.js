//Accedemos segun el css (me refiero al query selector)
//const documento = document.getElementsByClassName("cuadro ")
//console.log(documento)
//Accedemos segun su id
//const input = document.getElementById("input1")
//console.log(input)
//seleccionamos todos los elementos de clase input, por esto el #
//const input = document.querySelectorAll('#input')
/* const cuadro = document.querySelector('.cuadro')
const lista = document.getElementById('lista')
//accedemos al css del cuadro
cuadro.style.backgroundColor = 'green';
//Texto adentro de la lista, de manera textual
console.log(lista.innerText);
//el contenido textual y como esta estructurado
console.log(lista.textContent);
//el html
console.log(lista.innerHTML);

const titulo = document.getElementById('titulo')
titulo.innerHTML = 'Hola'

//funcion
lista.onclick = () => {
    lista.innerText=''
}

const enlace = document.getElementsByTagName('a')
//El enlace[0] indica que va a buscar el primero enlace que encuentre, y de vuelve el valor del atributo href
console.log(enlace[0].getAttribute('href'))
console.log(enlace[0].setAttribute('href', 'https://www.youtube.com/')) */

/* const cuadro = document.querySelector('.cuadro') */
/* Accedes a las clases del cuadro y con el add le agregas una clase  */
/* cuadro.classList.add('circulo') */
//Verifica si una clase se encuentra en un objeto
/* cuadro.classList.contains('cuadro')
cuadro.classList.remove('cuadro') */

// const cuadro = document.querySelector('.cuadro')
// //Crea un nuevo elemento, especificamente una lista
// const listanueva = document.createElement('ul')
// //Le adjuntamos el elemento que creamos por medio del append
// listanueva.innerHTML = '<li>hola</li>'
// listanueva.classList.add('circulo', 'tamaño')
// //por comas puedes separar atributos
// listanueva.setAttribute('id', 'listanueva', 'href', 'https://www.youtube.com/')

// /* listanueva.onclick = () => {
//     listanueva.innerText=''
// } */
// cuadro.append(listanueva)
// const Listanueva = document.createElement('ul')

// objeto.append(Listanueva)

// const objeto = document.getElementById('cuadro')


// // console.log(cuadro.children[0])
// // accedemos a los hijos del id
// console.log(cuadro.lastElementchildchild)



// color=document.getElementById('ul')


// console.log(color)
// function mostrarClick(parametro){
//     console.log(parametro)
// }
// target.classList.add('yupi')
// function mostrarClick(){
//   console.log('click')
//   var  l=document.getElementById('frutas')
  
//   l.classList.add('coca')
  


// }

// const frutas =document.getElementById('frutas')

// function mostrarClick(topping){
//     console.log(topping.)
// }
// frutas.addEventListener('click',mostrarClick(),classList.add('yupi'))
// const ayudas=document.getElementsByClassName('cuadros')

// for  (const a of ayudas){
//     ayudas.addEventlistener('click' (e)=> {//e de evento-
//         console.log(e.target.innerText)
//         })
// }

const boton=document.querySelector('button')
const color=document.getElementById('color')

function generarcolorHexAleatorio(){
    let digitos='0123456789ABCDEF'
    let colorHex='#'


    for(let i=0; i<6 ; i++){
         let indiceAleatorio= Math.floor(Math.random()*16)
         colorHex +=digitos[indiceAleatorio]
    }

    return colorHex
}

boton.addEventListener('click', function(){
    let colorAleatorio=generarcolorHexAleatorio()
    color.textContent=colorAleatorio
    document.body.style.backgroundColor=colorAleatorio
})

const button= document.getElementById('tamano')
const palabra =document.getElementById('palabra')





function generarcolorHexAleatorio(){
    let digitos='0123456789ABCDEF'
    let colorHex='#'


    for(let i=0; i<6 ; i++){
         let indiceAleatorio= Math.floor(Math.random()*16)
         colorHex +=digitos[indiceAleatorio]
    }

    return colorHex
}

button.addEventListener('click', function(){
    let colorAleatorio=generarcolorHexAleatorio()
    
    palabra.style.color=colorAleatorio
})






const botonfonts = document.getElementById('click')
const vete =document.getElementById('small')

botonfonts.addEventListener('click', function(){
    vete.style.fontSize= ((Math.random() * 30)+10 ) + "px"
})







const boton_c=document.getElementById('chage')
const color_c=document.getElementById('columbia')
const back=document.getElementById("contenedor4")

function generarcolorHexAleatorio(){
    let digitos='0123456789ABCDEF'
    let colorHex='#'


    for(let i=0; i<6 ; i++){
         let indiceAleatorio= Math.floor(Math.random()*16)
         colorHex +=digitos[indiceAleatorio]
    }

    return colorHex
}

boton_c.addEventListener('click', function(){
    let colorAleatorio=generarcolorHexAleatorio()
    color_c.textContent=colorAleatorio
    back.style.backgroundColor=colorAleatorio
})
const  biton=document.getElementById('col')
const backi=document.getElementById("contenedor5")

biton.addEventListener('click', function(){
    backi.style.opacity = Math.random()
})



const bicho  = document.getElementById("SALTICO");

bicho.addEventListener("click", function() {
    // URL de la página que deseas abrir en otra pestaña
    const urlNuevaPestana = "index2.html";

    // Abre una nueva pestaña con la URL especificada
    window.open(urlNuevaPestana, "_blank");
})