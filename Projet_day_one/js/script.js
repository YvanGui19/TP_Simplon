$(function(){ /* effet de défilement / utilise la bibliothèque jQuery */

    $(".navbar a, footer a").on("click", function(event){ /* déclare les liens <a> sur lesquel l'animation (event) se lance */
    
        event.preventDefault(); /* fonction event */
        var hash = this.hash;
        
        $('body,html').animate({scrollTop: $(hash).offset().top} , 900 , function(){window.location.hash = hash;}) /* anime la propriété scrolltop en 900 miliseconde */
        
    });

})