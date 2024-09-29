document.addEventListener('DOMContentLoaded', function() {
    // Función que cambia el color del elemento clickeado a negro
    function cambiarColorNegro(event) {
        event.target.style.backgroundColor = 'black';
    }

    // Seleccionamos los divs por sus IDs
    const div1 = document.getElementById('div1');
    const div2 = document.getElementById('div2');
    const div3 = document.getElementById('div3');
    const div4 = document.getElementById('div4');

    // Agregamos el evento click a cada uno de los divs
    div1.addEventListener('click', cambiarColorNegro);
    div2.addEventListener('click', cambiarColorNegro);
    div3.addEventListener('click', cambiarColorNegro);
    div4.addEventListener('click', cambiarColorNegro);
});


// Seleccionamos el div que cambiará de color con las teclas a, s, d
const keyDiv = document.getElementById('key');

// Función para cambiar el color del div 'key' según la tecla presionada
function cambiarColorConTecla(event) {
    let color;
    switch (event.key) {
        case 'a':
            color = 'pink';
            break;
        case 's':
            color = 'orange';
            break;
        case 'd':
            color = 'lightblue';
            break;
        default:
            color = null;
    }
    if (color) {
        keyDiv.style.backgroundColor = color;
    }
}

// Evento que detecta la tecla presionada y cambia el color de 'key'
document.addEventListener('keydown', cambiarColorConTecla);

// Función para crear un nuevo div de color cuando se presionan q, w o e
function crearNuevoDivConTecla(event) {
    let color;
    switch (event.key) {
        case 'q':
            color = 'purple';
            break;
        case 'w':
            color = 'gray';
            break;
        case 'e':
            color = 'brown';
            break;
        default:
            color = null;
    }
    if (color) {
        const nuevoDiv = document.createElement('div');
        nuevoDiv.style.width = '200px';
        nuevoDiv.style.height = '200px';
        nuevoDiv.style.backgroundColor = color;
        nuevoDiv.style.marginTop = '20px';
        document.body.appendChild(nuevoDiv);
    }
}


document.addEventListener('keydown', crearNuevoDivConTecla);