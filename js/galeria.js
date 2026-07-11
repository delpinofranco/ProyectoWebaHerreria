const imagenes = [
  "./img/img1.jpeg",
  "./img/img2.jpeg",
  "./img/img3.jpeg",
  "./img/img4.jpeg",
  "./img/img5.jpeg",
  "./img/img6.jpeg",
  "./img/img7.jpeg",
  "./img/img8.jpeg",
  "./img/img9.jpeg",
  "./img/img10.jpeg",
  "./img/img11.jpeg",
  "./img/img12.jpeg",
  "./img/img13.jpeg",
  "./img/img14.jpeg",
  "./img/img15.jpeg",
  "./img/img16.jpeg"
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











