

// Scroll de los botones

var ventana_ancho = $(window).innerWidth();


var productos = $(".Productos").offset().top
var catalogo =$(".catalogo").offset().top
var mini =$(".minca").offset().top
var budin= $(".budin").offset().top
var tortas= $(".tartas").offset().top
var merienda= $(".box").offset().top;


// Productos
$("#btn-productos").on("click",function(e) {
    e.preventDefault();
    if (ventana_ancho >=1200) {
        $("html, body").animate({scrollTop:productos},500)
    }else if (ventana_ancho <1200 && ventana_ancho >=1000) {
        $("html, body").animate({scrollTop:productos -100},500)
    }else if (ventana_ancho<1200 && ventana_ancho >=414) {
        $("html, body").animate({scrollTop:productos+20},500);   
    };
})

// Catalogo
$("#btn-catalogo").on("click",function(e){
    e.preventDefault();
    if (ventana_ancho >=1200) {
        $("html, body").animate({scrollTop:catalogo},500)  
    }else if (ventana_ancho<1200 && ventana_ancho >=1000) {
        $("html, body").animate({scrollTop:catalogo-100},500)
    }else if (ventana_ancho<1200 && ventana_ancho >=414) {
        $("html, body").animate({scrollTop:catalogo},500);   
    };
});


// Mini cakes
$(".minicake").on("click",function(e) {
    e.preventDefault();
    if (ventana_ancho >=1200) {
        $("html, body").animate({scrollTop:mini-50},500)
    }else if (ventana_ancho <1200 && ventana_ancho >=1000) {
        $("html, body").animate({scrollTop:mini-100},500)
    }else if (ventana_ancho<1000 && ventana_ancho >=300) {
        $("html, body").animate({scrollTop:mini-10},500);   
    };
})

//Budines
$(".budines").on("click",function(e) {
    e.preventDefault();
    if (ventana_ancho >=1200) {
        $("html, body").animate({scrollTop:budin-10},500)
    }else if (ventana_ancho <1200 && ventana_ancho >=1000) {
        $("html, body").animate({scrollTop:budin-100},500)
    }else if (ventana_ancho<1000 && ventana_ancho >=300) {
        $("html, body").animate({scrollTop:budin-10},500);   
    };
})


//Tortas
$(".tartaytorta").on("click",function(e) {
    e.preventDefault();
    if (ventana_ancho >=1200) {
        $("html, body").animate({scrollTop:tortas-10},500)
    }else if (ventana_ancho <1200 && ventana_ancho >=1000) {
        $("html, body").animate({scrollTop:tortas-100},500)
    }else if (ventana_ancho<1000 && ventana_ancho >=300) {
        $("html, body").animate({scrollTop:tortas-10},500);   
    };
})


// Meriendas
$(".desayuno").on("click",function(e) {
    e.preventDefault();
    if (ventana_ancho >=1200) {
        $("html, body").animate({scrollTop:merienda-20},500)
    }else if (ventana_ancho <1200 && ventana_ancho >=300) {
        $("html, body").animate({scrollTop:merienda-80},500)  
    };
})