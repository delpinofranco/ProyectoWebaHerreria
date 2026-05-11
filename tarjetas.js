document.addEventListener("DOMContentLoaded", () => {

const trabajos = [
  { id: 1, titulo: "Reja Colonial", img: "img1.jpeg", desc: "Hierro forjado a mano de estilo tradicional." },
  { id: 2, titulo: "Porton Corredizo", img: "img2.jpeg", desc: "Automatizado con motor de alto tránsito." },
  { id: 3, titulo: "Parrilla Premium", img: "img3.jpeg", desc: "Acero inoxidable con sistema de elevación." },
  { id: 4, titulo: "Escalera Moderna", img: "img3.jpeg", desc: "Estructura metálica minimalista." }
];

const contenedor = document.getElementById('galeria-trabajos');
const modal = document.getElementById('miModal');
const btnCerrar = document.querySelector('.cerrar');



// abrir modal
function mostrarDetalle(trabajo){
  document.getElementById('imgModal').src = trabajo.img;
  document.getElementById('tituloModal').innerText = trabajo.titulo;
  document.getElementById('descModal').innerText = trabajo.desc;

  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

// cards
trabajos.forEach(t => {
  const tarjeta = document.createElement('div');
  tarjeta.className = 'tarjeta';
  tarjeta.style.cursor = 'pointer';

  tarjeta.innerHTML = `
  
    <img src="${t.img}" alt="${t.titulo}">
    <div class="descripcion">
      <h3>${t.titulo}</h3>
      <p>${t.desc}</p>
    </div>
  `;

  tarjeta.onclick = () => mostrarDetalle(t);
  contenedor.appendChild(tarjeta);
});

// cerrar botón
btnCerrar.onclick = () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
};

// cerrar clic afuera
window.onclick = (e) => {
  if (e.target === modal){
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
};

});