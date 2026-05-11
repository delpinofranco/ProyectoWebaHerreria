document.addEventListener("DOMContentLoaded", () => {

const trabajos = [
  { id: 1, titulo: "Reja Colonial", img: "img1.jpeg", desc: "Hierro forjado a mano de estilo tradicional." },
  { id: 2, titulo: "Porton Corredizo", img: "img2.jpeg", desc: "Automatizado con motor de alto tránsito." },
  { id: 3, titulo: "Parrilla Premium", img: "img3.jpeg", desc: "Acero inoxidable con sistema de elevación." },
  { id: 4, titulo: "Escalera Moderna", img: "img3.jpeg", desc: "Estructura metálica minimalista." },
   { id: 2, titulo: "Porton Corredizo", img: "img2.jpeg", desc: "Automatizado con motor de alto tránsito." },
  { id: 3, titulo: "Parrilla Premium", img: "img3.jpeg", desc: "Acero inoxidable con sistema de elevación." },
  { id: 4, titulo: "Escalera Moderna", img: "img3.jpeg", desc: "Estructura metálica minimalista." }
];

const contenedor = document.getElementById('galeria-trabajos');
const modal = document.getElementById('miModal');
const btnCerrar = document.querySelector('.cerrar');
const btnVerMas = document.getElementById("btn-ver-mas");

let visibles = 2; // 🔥 cuántas tarjetas se muestran primero

// abrir modal
function mostrarDetalle(trabajo){
  document.getElementById('imgModal').src = trabajo.img;
  document.getElementById('tituloModal').innerText = trabajo.titulo;
  document.getElementById('descModal').innerText = trabajo.desc;

  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

// render de tarjetas
function renderizar() {
  contenedor.innerHTML = "";

  trabajos.slice(0, visibles).forEach(t => {
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

  // ocultar botón si ya no hay más
  if (visibles >= trabajos.length) {
    btnVerMas.style.display = "none";
  }
}

// botón ver más
btnVerMas.addEventListener("click", () => {
  visibles += 2; // muestra 2 más cada click
  renderizar();
});

// cerrar modal
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

// inicial
renderizar();

});