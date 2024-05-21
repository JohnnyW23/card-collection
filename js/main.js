tela = {
    main: true,
    sobre: false,
    colecao: false,
    colecaoInitial: $('.card-box').html()
}

$(() => {
    $('#colecao').click(function(){
        if(!tela.colecao){
            tela.colecao = true;
            tela.main = false;

            $('.main-wraper').fadeOut(500);
            setTimeout(() => {
                $('.collection-box-wraper').fadeIn(500)
            }, 500);
        }
    })

    $('#github').click(function(){
        window.open('https://github.com/JohnnyW23', '_blank')
    })
})