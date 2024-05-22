tela = {
    idioma: true,
    main: false,
    sobre: false,
    colecao: false,
}

$(() => {
    $('#flag-pt').click(function(){
        if(tela.idioma){
            tela.idioma = 'portugues';
            $('#idioma-ingles').remove();

            construirCartas();
            $('.idiomas-wraper').fadeOut(500);
            setTimeout(() => {
                $('#idioma-portugues').fadeIn(500);
                tela.main = true
                ativarMain();
                ativarCardBox();
            }, 500);
        }
    })

    $('#flag-ing').click(function(){
        if(tela.idioma){
            tela.idioma = 'ingles';
            $('#idioma-portugues').remove();
            construirCartas();

            $('.idiomas-wraper').fadeOut(500);
            setTimeout(() => {
                $('#idioma-ingles').fadeIn(500);
                tela.main = true;
                ativarMain();
                ativarCardBox();
            }, 500);
        }
    })

    function ativarMain(){
        $('#colecao').click(function(){
            if(!tela.colecao){
                tela.colecao = true;
                tela.main = false;
                tela.colecaoInitial = $('.card-box').html();
    
                $('.main-wraper').fadeOut(500);
                setTimeout(() => {
                    $('.collection-box-wraper').fadeIn(500)
                }, 500);
            }
        })
    
        $('#github').click(function(){
            window.open('https://github.com/JohnnyW23', '_blank')
        })
    }
})