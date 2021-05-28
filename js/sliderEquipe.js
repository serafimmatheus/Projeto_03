$(function(){

    let indiceAtual = 0;
    let indiceMaximo = $('.sobre .sobre-equipe .sobre-equipe-02').length;
    let delay = 60000;

    init_slider();
    function init_slider(){
        $('.sobre .sobre-equipe .sobre-equipe-02').eq(0).fadeIn();
        setInterval(function(){
            alternar_slider();
        },delay);
    }

    cliqueSlider();
    function cliqueSlider(){
        $('.slider-bullets span').click(function(){
            $('.sobre .sobre-equipe .sobre-equipe-02').eq(indiceAtual).stop().fadeOut(1000);
            indiceAtual = $(this).index();
            $('.sobre .sobre-equipe .sobre-equipe-02').eq(indiceAtual).stop().fadeIn(1000);
            $('.slider-bullets span').css('background','#ccc');
            $(this).css('background','rgb(100,100,100)');
        });
    }

    function alternar_slider(){
        $('.sobre .sobre-equipe .sobre-equipe-02').eq(indiceAtual).stop().fadeOut(2000);
        indiceAtual +=1;
        if(indiceAtual == indiceMaximo)
            indiceAtual = 0;
        $('.sobre .sobre-equipe .sobre-equipe-02').eq(indiceAtual).fadeIn(2000);
        $('.slider-bullets span').css('background','#ccc');
        $('.slider-bullets span').eq(indiceAtual).stop().css('background','rgb(100,100,100)');
    }
})
