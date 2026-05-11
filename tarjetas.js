const trabajos = [
    { id: 1, titulo: "Reja Colonial", img: "img1.jpeg", desc: "Hierro forjado a mano de estilo tradicional." },
    { id: 2, titulo: "Porton Corredizo", img: "img2.jpeg", desc: "Automatizado con motor de alto tránsito." },
    { id: 3, titulo: "Parrilla Premium", img: "img3.jpeg", desc: "Acero inoxidable con sistema de elevación." },
    { id: 4, titulo: "Escalera Moderna", img: "img3.jpeg", desc: "Estructura metálica minimalista." }
];

const contenedor = document.getElementById('galeria-trabajos');
const modal = document.getElementById('miModal');
const btnCerrar = document.querySelector('.cerrar');

// Función para abrir el modal con la info del trabajo
function mostrarDetalle(trabajo) {
    document.getElementById('imgModal').src = trabajo.img;
    document.getElementById('tituloModal').innerText = trabajo.titulo;
    document.getElementById('descModal').innerText = trabajo.desc;
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Evita que se mueva el fondo
}

// Generar las tarjetas
trabajos.forEach(t => {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'tarjeta';
    tarjeta.style.cursor = 'pointer'; // Para que el usuario sepa que es clickeable
    
    tarjeta.innerHTML = `
        <img src="${t.img}" alt="${t.titulo}">
        <div class="descripcion">
            <h3>${t.titulo}</h3>
            <p>${t.desc}</p>
        </div>
    `;

    // Al hacer clic en la tarjeta, abrimos el detalle
    tarjeta.onclick = () => mostrarDetalle(t);
    
    contenedor.appendChild(tarjeta);
});

// Cerrar al hacer clic en la X
btnCerrar.onclick = () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
};

// Cerrar si hace clic fuera de la caja blanca
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
};