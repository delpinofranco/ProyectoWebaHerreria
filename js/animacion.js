const reveals = document.querySelectorAll(".reveal");

function reveal() {
    reveals.forEach((element) => {
        const top = element.getBoundingClientRect().top;
        const visible = window.innerHeight - 100;

        if (top < visible) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);
reveal(); // Para los elementos visibles al cargar la página