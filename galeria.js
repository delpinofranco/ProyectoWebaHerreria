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

let containersImg = document.getElementById("galeria");

function agregarImg(){
    for (let index = 0; index <= imagenes.length -1; index++) {
        containersImg.innerHTML += `<img src="${imagenes[index]}" alt=""> ` 
        
    }
}

agregarImg();


















