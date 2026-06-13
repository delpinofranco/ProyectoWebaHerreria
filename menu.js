const hamburguesa = document.getElementById("hambur");
const nav = document.getElementById("nava");
const btnoCerrar = document.getElementById("cerrar");


hamburguesa.addEventListener("click",()=>{
    if(nav.style.display !== "block"){
        nav.style.display = "block"
        hamburguesa.style.display = "none";
        btnoCerrar.style.display = "block";    }
  
})

btnoCerrar.addEventListener("click",()=>{
    if(nav.style.display === "block"){
        nav.style.display = "none"
        hamburguesa.style.display = "block";
        btnoCerrar.style.display = "none";
    }
})