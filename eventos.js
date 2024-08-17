document.addEventListener('DOMContentLoaded', function () { 
const imDiv = document.querySelector("#soydiv")
function alerta () {
alert ("¡Hola, soy el Div!")
}

imDiv.addEventListener('click', alerta);
});
