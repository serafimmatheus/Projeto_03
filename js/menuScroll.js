$(function(){
    $('nav a').click(function(){
        let href = $(this).attr('href')
        let offsettop = $(href).offset().top

        $('html,body').animate({
            'scrollTop':offsettop
        })

        return false
    })
})