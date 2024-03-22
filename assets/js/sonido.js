import { Leon, Lobo, Oso, Serpiente, Aguila } from './animal.js';


function reproducirSonido(animal) {
  const audio = new Audio(animal.Sonido);
  audio.play();
};

document.querySelectorAll('.animal-img').forEach(img => {
  img.addEventListener('click', () => {
    const nombreAnimal = img.alt;
    let animal;

    switch (nombreAnimal) {
    case 'Leon':
        animal = new Leon();
        break;
    case 'Lobo':
        animal = new Lobo();
        break;
    case 'Oso':
        animal = new Oso();
        break;
    case 'Serpiente':
        animal = new Serpiente();
        break;
    case 'Aguila':
        animal = new Aguila();
        break;
    default:
        animal = null;
    }

        if (animal) {
            reproducirSonido(animal);
        }
    });
});


function mostrarDetalleAnimal(animal) {
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = `
        <h5>${animal.Nombre}</h5>
        <p>Edad: ${animal.Edad}</p>
        <p>Comentarios: ${animal.Comentarios}</p>
        <img src="${animal.Img}" alt="${animal.Nombre}" class="modal-img">
    `;
};


document.querySelectorAll('.animal-img').forEach(img => {
    img.addEventListener('click', () => {
    const nombreAnimal = img.alt;
    let animal;

    switch (nombreAnimal) {
    case 'Leon':
        animal = new Leon();
        break;
    case 'Lobo':
        animal = new Lobo();
        break;
    case 'Oso':
        animal = new Oso();
        break;
    case 'Serpiente':
        animal = new Serpiente();
        break;
    case 'Aguila':
        animal = new Aguila();
        break;
    default:
        animal = null;
    }

    if (animal) {
            mostrarDetalleAnimal(animal);
        }
    });
});

export { Leon, Lobo, Oso, Serpiente, Aguila };