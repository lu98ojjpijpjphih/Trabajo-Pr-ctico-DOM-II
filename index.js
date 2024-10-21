let boton = document.querySelector("#Boton")
let valor = document.querySelector("#texto")
let titulo = document.querySelector("h1")
let p = document.querySelector("#Parrafo")
    
let boton2 = document.querySelector("#Boton2")
let valor2 = document.querySelector("#texto2")
let p2 = document.querySelector("#Parrafo2")


boton.onclick = function() {
if (texto.value == "¿Cómo estas?") {
    alert("Bien y vos?")
} else {
    alert("No entiendo la pregunta")
}
}


let arreglo = [] 

boton2.onclick = function () {

    arreglo.push (' ' + valor2.value)
    p2.textContent = arreglo
}


