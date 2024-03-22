import { Leon, Lobo, Oso, Serpiente, Aguila } from './animal.js';


function obtenerValoresFormulario() {
    const nombre = document.getElementById('animal').value;
    const edad = document.getElementById('edad').value;
    const comentarios = document.getElementById('comentarios').value;
    const img = `assets/imgs/${nombre.toLowerCase()}.jpg`; 
    const sonido = `assets/sounds/${nombre.toLowerCase()}.mp3`;

    return { nombre, edad, comentarios, img, sonido };
}

function crearInstanciaAnimal(nombre, edad, img, comentarios, sonido) {
    switch (nombre) {
    case 'Leon':
        return new Leon(nombre, edad, img, comentarios, sonido);
    case 'Lobo':
        return new Lobo(nombre, edad, img, comentarios, sonido);
    case 'Oso':
        return new Oso(nombre, edad, img, comentarios, sonido);
    case 'Serpiente':
        return new Serpiente(nombre, edad, img, comentarios, sonido);
    case 'Aguila':
        return new Aguila(nombre, edad, img, comentarios, sonido);
    default:
        return null;
    }
}


function mostrarAnimalEnTabla(animal) {
    const tablaAnimales = document.getElementById('Animales');

    const divAnimal = document.createElement('div');
    divAnimal.classList.add('animal');
    divAnimal.innerHTML = `
        <div class="px-3 pb-2">
        <div class="text-white">
            <img height="200" src="${animal.Img}" alt="${animal.Nombre}" class="animal-img">
            <h4>${animal.Nombre}</h4>
        </div>
        </div>
    `;

    divAnimal.addEventListener('click', () => {
        mostrarDetalleAnimal(animal);
    });

    tablaAnimales.appendChild(divAnimal);
};

function mostrarDetalleAnimal(animal) {};

document.getElementById('btnRegistrar').addEventListener('click', () => {

    const { nombre, edad, comentarios, img, sonido } = obtenerValoresFormulario();

    if (nombre && edad && comentarios) {
        const animal = crearInstanciaAnimal(nombre, edad, img, comentarios, sonido);
        mostrarAnimalEnTabla(animal);
        limpiarFormulario();
            } else {
                alert('Por favor complete todos los campos.');
            }
    });

function limpiarFormulario() {
    document.getElementById('animal').selectedIndex = 0;
    document.getElementById('edad').selectedIndex = 0;
    document.getElementById('comentarios').value = '';
};