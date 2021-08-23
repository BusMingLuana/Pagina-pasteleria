// Menú desplegable 
$(document).ready(menu);


var contador = 1;

function menu() {
    $("#iconoMenu2").click(function() {
        
        if (contador == 0) {
            $("#menu").animate({
                left:"-100%"
            });
            contador = 1;
        }else{
            $("#menu").animate({
                left:"0"
            },"slow");
            
            contador = 0;
        }
    });
    
}

// Selecciona los botones del menú
// Productos
$("#btn-productos").click(function() {
    $("#menu").animate({
        left:"-100%"
    },"slow")

    contador = 1;
});

// Catalogo
$("#btn-catalogo").click(function() {
    $("#menu").animate({
        left:"-100%"
    },"slow")
    
    contador = 1;
});

// Mini
$(".minicake").click(function() {
    $("#menu").animate({
        left:"-100%"
    },"slow")
    
    contador = 1;
});

// Budin
$(".budines").click(function() {
    $("#menu").animate({
        left:"-100%"
    },"slow")
    
    contador = 1;
});


// Tartas
$(".tartaytorta").click(function() {
    $("#menu").animate({
        left:"-100%"
    },"slow")
    
    contador = 1;
});

// Meriendas
$(".desayuno").click(function() {
    $("#menu").animate({
        left:"-100%"
    },"slow")
    
    contador = 1;
});