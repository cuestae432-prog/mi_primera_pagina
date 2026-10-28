
let numeroFavorito = 15;

const respuesta = document.getElementById("respuesta");
const resultado = document.getElementById("resultado");
const comprobar = document.getElementById("comprobar");

// Juego para adivinar el número
comprobar.onclick = function () {
    let numero = respuesta.value.trim();

    if (numero === "") {
        resultado.textContent = "Por favor, selecciona un número.";
        return;
    }

    numero = Number(numero);

    if (!Number.isInteger(numero) || numero < 10 || numero > 20) {
        resultado.textContent = "El número debe estar entre 10 y 20.";
    } else if (numero < numeroFavorito) {
        resultado.textContent = "¡Intenta con un número más alto!";
    } else if (numero > numeroFavorito) {
        resultado.textContent = "¡Intenta con un número más bajo!";
    } else {
        resultado.textContent = "¡Correcto! Adivinaste mi número favorito.";
    }
};

// Permitir comprobar el número pulsando Enter
respuesta.addEventListener("keydown", function (evento) {
    if (evento.key === "Enter") {
        comprobar.click();
    }
});

// Selector de favoritos
const selector = document.getElementById("selector");
const nombre = document.getElementById("nombre");
const descripcion = document.getElementById("descripcion");
const imagen = document.getElementById("imagen");
const contenido = document.getElementById("contenido-favorito");

const favoritos = {
    equipo: {
        nombre: "Mi equipo favorito",
        descripcion: "Este es mi equipo favorito de fútbol.",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLmLFNQziUQKpkeMfyfFgLjSGkbtVaMRbx__duiv5GDA&s=10",
        alt: "Imagen de mi equipo de fútbol favorito"
    },

    pelicula: {
        nombre: "Mi película favorita",
        descripcion: "Esta es mi película favorita.",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMJilq6HHbwBKVLh82fW0NCQKHghLxL6-_A36ErW4zdA&s=10",
        alt: "Imagen de mi película favorita"
    },

    fruta: {
        nombre: "Mi fruta favorita",
        descripcion: "Esta es mi fruta favorita.",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC6RwrpRS03-yHyJgeTo3-jBJ5LZThNfUzJE0DQ-RYAQ&s=10",
        alt: "Imagen de mi fruta favorita"
    }
};

selector.onchange = function () {
    const favorito = favoritos[this.value];

    if (!favorito) {
        contenido.hidden = true;
        nombre.textContent = "";
        descripcion.textContent = "";
        imagen.hidden = true;
        imagen.removeAttribute("src");
        return;
    }

    contenido.hidden = false;
    nombre.textContent = favorito.nombre;
    descripcion.textContent = favorito.descripcion;
    imagen.alt = favorito.alt;
    imagen.hidden = true;
    imagen.src = favorito.imagen;
};

// Mostrar la imagen cuando termine de cargar
imagen.onload = function () {
    imagen.hidden = false;
};

// Si el enlace no funciona, mostrar un aviso
imagen.onerror = function () {
    imagen.hidden = true;
    descripcion.textContent =
        "No se pudo cargar la imagen. Intenta utilizar otro enlace.";
};
