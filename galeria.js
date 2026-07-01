const imagenes = [
    "img2.jpeg",
    "img3.jpeg",
    "img2.jpeg",
    "img3.jpeg",
    "img2.jpeg",
    "img3.jpeg",
    "img2.jpeg",
    "img3.jpeg"
];



let indice = 0;

function mostrarImagen(posicion){

    indice = posicion;

    document.getElementById("imagenPrincipal")
        .src = imagenes[indice];

    actualizarMiniaturas();
}

function cambiarSlide(direccion){

    indice += direccion;

    if(indice >= imagenes.length){
        indice = 0;
    }

    if(indice < 0){
        indice = imagenes.length - 1;
    }

    mostrarImagen(indice);
}

function actualizarMiniaturas(){

    const thumbs =
        document.querySelectorAll(".miniaturas img");

    thumbs.forEach(img =>
        img.classList.remove("active"));

    thumbs[indice]
        .classList.add("active");
}











