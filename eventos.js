document.addEventListener('DOMContentLoaded', function () { 
const imDiv = document.querySelector("#soydiv")

function alerta (event) {
alert ("¡Hola, soy el Div!")
event.stopPropagation();

}

imDiv.addEventListener('click', alerta);


const button = document.getElementById("btn");
function botonalerta (event2){
    alert("¡Hola!")
    event2.stopPropagation();
}
button.addEventListener('click', botonalerta);


}); 

