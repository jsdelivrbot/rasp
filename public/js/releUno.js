'use strict';

loadProgressBar();
$(function () {
    comprobar();
});
//
//
//
// $("#trunkButton").bind("tap",  tapHandler);
//
// function tapHandler( event ){
//     $( event.target ).addClass( "tap" );
// }
//
// $("#trunkButton").on('tap',abrir);
$("#trunkButton").on('click', abrir);

function abrir() {
    $("#trunkButton").css("background-color", "#6c757d");
    axios.get('/abrir').then(function (response) {
        var respuesta = response.data;
        trataErrores(respuesta);
    }).catch(function (error) {
        console.log(error);
    });
}

function comprobar() {
    axios.get('/comprobar').then(function (response) {
        var respuesta = response.data;
        trataErrores(respuesta);
    }).catch(function (error) {
        console.log(error);
    });
}

function trataErrores(respuesta) {
    if (respuesta === 1) {

        $('#trunk').html(' <i class="fas fa-lock-open fa-10x mt-5 p-5 offset-1"></i>');
    } else if (respuesta === 0) {

        $('#trunk').html(' <i class="fas fa-lock fa-10x mt-5 p-5 offset-1"></i>');
    }
}