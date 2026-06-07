const hamburguesa = document.getElementById("hambur");
const nav = document.getElementById("nava");
const btnoCerrar = document.getElementById("btn-cerrar");

hamburguesa.addEventListener("click", () => {
if(getComputedStyle(hamburguesa).display  === "flex"){
    nav.style.display = "flex";
    btnoCerrar.style.display = "flex";
    hamburguesa.style.display = "none"
}
 

})

btnoCerrar.addEventListener("click",()=>{
if(getComputedStyle(btnoCerrar).display  === "flex"){
    nav.style.display = "none";
    btnoCerrar.style.display = "none";
    hamburguesa.style.display = "flex"
    btnoCerrar.style.display = "none";
}})

window.addEventListener("resize", () => {

    if(window.innerWidth > 600){

        nav.style.display="";

        hamburguesa.style.display = "";
        btnoCerrar.style.display= "";
       
    }
    
})