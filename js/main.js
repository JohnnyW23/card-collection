tela = {
    idioma: true,
    main: false,
    sobre: false,
    colecao: false,
}

traducao = [
    {
        scroll: {
            titulo: 'Tudo de resume a uma palavra...',
            paragrafos: [
                'Relaxa! Daqui a pouquinho eu edito esse pergaminho e conto pra vocês sobre esse projeto.',
                'Preciso ir pra aula. Fui!'
            ]
        },
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
    {
        scroll: {
            titulo: 'The whole reason in a nutshell...',
            paragrafos: [
                "Hold on! I'll soon edit this scroll and tell you guys about this project.",
                "I need to go to the class now. See ya!"
            ]
        },
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
]

$(() => {
    $('#flag-pt').click(function(){
        if(tela.idioma){
            tela.idioma = 'portugues';
            traduzirMain(0);
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
            traduzirMain(1);
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

    function traduzirMain(num){
        $('#sobre .sessao-descricao').append('\
            <h2>' + traducao[num].sobre[0] + '</h2>\
            <p>' + traducao[num].sobre[1] + '</p>\
        ');
        $('#colecao .sessao-descricao').append('\
            <h2>' + traducao[num].colecao[0] + '</h2>\
            <p>' + traducao[num].colecao[1] + '</p>\
        ');
        $('#github .sessao-descricao').append('\
            <h2>' + traducao[num].github[0] + '</h2>\
            <p>' + traducao[num].github[1] + '</p>\
        ');
        $('.voltar-btn').append('<h2>' + traducao[num].voltar_btn  + '</h2>');
        $('.scroll-escritos').append('\
        <h1>' + traducao[num].scroll.titulo + '</h1>\
        <br><br>');
        for(i = 0; i < traducao[num].scroll.paragrafos.length; i++){
            $('.scroll-escritos').append('\
            <p>' + traducao[num].scroll.paragrafos[i] + '</p>\
            <br>');
        };
        $('.scroll-escritos').append('<img id="retornar" src="assets/svg/voltar.svg" width="20px" style="display: block; margin: 0 auto">');
    }

    function ativarMain(){

        $('#sobre').click(function(){
            if(!tela.sobre){
                tela.main = false;
                tela.sobre = true;
                $('.sessoes').fadeOut(500);
                setTimeout(() => {
                    $('.sobre').fadeIn(500);
                }, 500);
                setTimeout(() => {
                    $('.scroll-escritos-wraper').slideToggle(800);
                }, 1250);
            }
        })

        $('#retornar').click(function(){
            if(!tela.main){
                tela.sobre = false;
                tela.main = true;
                $('.sobre').fadeOut(500);
                $('.scroll-escritos-wraper').animate({
                    scrollTop: $(document).height() * -1
                }, 0);
                $('.scroll-escritos-wraper').slideToggle(500);
                setTimeout(() => {
                    $('.sessoes').fadeIn(500);
                    $('.scroll-escritos-wraper').hide();
                }, 500);
            }
        })

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