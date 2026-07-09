const imagenes = [
  "/img/img1.jpeg",
  "/img/img2.jpeg",
  "/img/img3.jpeg",
  "/img/img4.jpeg",
  "/img/img5.jpeg",
  "/img/img6.jpeg",
  "/img/img7.jpeg",
  "/img/img8.jpeg",
  "/img/img9.jpeg",
  "/img/img10.jpeg",
  "/img/img11.jpeg",
  "/img/img12.jpeg",
  "/img/img13.jpeg",
  "/img/img14.jpeg",
  "/img/img15.jpeg",
  "/img/img16.jpeg"
];

const siguiente = document.getElementById("s");
const atras = document.getElementById("a");
const src = document.getElementById("img1");



function agrergar(){

    for (let index = 0; index < array.length; index++) {
         const img = document.createElement("img");
             img.src = imagenes[index];
             contenedor.appendChild(img);
        
    }
  
}