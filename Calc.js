const botonNumeros = document.getElementsByName('data-number');
const botonOpera = document.getElementsByName('data-opera');
const botonIgual = document.getElementsByName('data-igual') [0];
const botonDelete = document.getElementsByName('data-delete') [0];
const input = document.getElementById('result');
let operator;




botonNumeros.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNumero(boton);      
    })
});


botonOpera.forEach(function(boton){
    boton.addEventListener('click', function(){
        operator = boton.innerText;
        input.value += boton.innerText;
    })
});


botonIgual.addEventListener('click', function(){
    calcular();
    actualizardiaplay();
});

botonDelete.addEventListener('click', function(){
    clear();
    actualizardiaplay();
});
function agregarNumero(boton)
{
    input.value += boton.innerText;
}   