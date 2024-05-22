tela = {
    idioma: true,
    main: false,
    sobre: false,
    colecao: false,
    portugues: {
        sobre: [
            'SOBRE O PROJETO',
            'O que significa esse projeto e o porquê dele ter sido feito.'
        ],
        colecao: [
            'CARTAS',
            'Confira todas as cartas que a coleção possui!'
        ],
        github: [
            'GITHUB',
            'Confira outros projetos em meu perfil no GitHub!'
        ],
        voltar_btn: 'VOLTAR'
    },
    ingles: {
        sobre: [
            'ABOUT THE PROJECT',
            'What is the meaning of this project and why I made it.'
        ],
        colecao: [
            'CARDS',
            'Check out the complete collection of available cards!'
        ],
        github: [
            'GITHUB',
            'Check out other projects on my GitHub profile!'
        ],
        voltar_btn: 'RETURN'
    }
}

$(() => {
    $('#flag-pt').click(function(){
        if(tela.idioma){
            tela.idioma = 'portugues';
            traduzirMain();
            construirCartas();

            $('.idiomas-wraper').fadeOut(500);
            setTimeout(() => {
                $('.page-wraper').fadeIn(500);
                $('.page-wraper').css('display', 'grid');
                tela.main = true
                ativarMain();
                ativarCardBox();
            }, 500);
        }
    })

    $('#flag-ing').click(function(){
        if(tela.idioma){
            tela.idioma = 'ingles';
            traduzirMain();
            construirCartas();

            $('.idiomas-wraper').fadeOut(500);
            setTimeout(() => {
                $('.page-wraper').fadeIn(500);
                $('.page-wraper').css('display', 'grid');
                tela.main = true;
                ativarMain();
                ativarCardBox();
            }, 500);
        }
    })

    function traduzirMain(){
        if(tela.idioma == 'portugues'){
            $('#sobre .sessao-descricao').append('\
                <h2>' + tela.portugues.sobre[0] + '</h2>\
                <p>' + tela.portugues.sobre[1] + '</p>\
            ');
            $('#colecao .sessao-descricao').append('\
                <h2>' + tela.portugues.colecao[0] + '</h2>\
                <p>' + tela.portugues.colecao[1] + '</p>\
            ');
            $('#github .sessao-descricao').append('\
                <h2>' + tela.portugues.github[0] + '</h2>\
                <p>' + tela.portugues.github[1] + '</p>\
            ');
            $('.voltar-btn').append('<h2>' + tela.portugues.voltar_btn  + '</h2>');

        }else if(tela.idioma == 'ingles'){
            $('#sobre .sessao-descricao').append('\
                <h2>' + tela.ingles.sobre[0] + '</h2>\
                <p>' + tela.ingles.sobre[1] + '</p>\
            ');
            $('#colecao .sessao-descricao').append('\
                <h2>' + tela.ingles.colecao[0] + '</h2>\
                <p>' + tela.ingles.colecao[1] + '</p>\
            ');
            $('#github .sessao-descricao').append('\
                <h2>' + tela.ingles.github[0] + '</h2>\
                <p>' + tela.ingles.github[1] + '</p>\
            ');
            $('.voltar-btn').append('<h2>' + tela.ingles.voltar_btn  + '</h2>');
        }
    }

    function ativarMain(){
        $('#colecao').click(function(){
            if(!tela.colecao){
                tela.colecao = true;
                tela.main = false;
                $('.bg-img').css('background-image', 'url(assets/bg/' + cartas[0].id + '.jpg)');
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