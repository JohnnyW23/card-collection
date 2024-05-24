tela = {
    idioma: true,
    main: false,
    sobre: false,
    colecao: false,
}

traducao = [
    {
        scroll: {
            titulo: 'Tudo se resume a uma palavra...',
            paragrafos: [
                '23/05/2024',
                'Meu nome é Davi (também chamado de David) e minha mente, por mais que eu não faça de propósito, está constantemente caçando novas ideias. Me deparei com um projeto na internet sobre a criação de cartas colecionáveis com super-heróis e essa ideia ficou na minha cabeça. Tenho mais afinidade com criaturas mitológicas e esse tipo de fantasia. De modo inevitável, pensei: por que não?',
                'Esse projeto me ajudou a exercitar e aprender diversos conceitos em relação às linguagems HTML, CSS e JavaScript (utilizando JQuery). E eu acho isso incrivelmente divertido. Os eventos de um site parecem mágica! Quero dizer, se você está no computador, percebeu que passar o mouse nas sessões da tela principal faz as barras se animarem. Você viu como esse pergaminho se abriu pra sua leitura? Isso é simplesmente fascinante :P',
                'O processo de criação das cartas também é muito legal. O avanço das inteligências artificiais tornou possível esse projeto ser tão personalizado para o propósito de entreter com uma coleção de lindas cartas. Como se trata de um projeto pequeno, não há mal em utilizar a I.A. para as imagens. Obviamente, em um projeto sério, artistas humanos são importantíssimos porque possuem total entendimento e controle do que precisa ser criado e o que será mais adequado. A criatividade humana é insubstituível.',
                'Cada brilho ao redor das cartas representa o nível de raridade:',
                'Prata: Comum</p><p>Verde: Raro</p><p>Azul: Super-raro</p><p>Dourado: Épico</p><p>Roxo: Lendário',
                'Eu fiz a aparência e essência dos personagens baseado em pessoas próximas de mim, também conhecidas como amigos! :P',
                'E tudo isso só foi possível porque fiquei entediado demais para não estar criando nada. Tudo se resumiu a essa palavra: TÉDIO!',
                'Recentemente criei um jogo chamado Cyber Luck Ops. <a href="https://johnnyw23.github.io/cyber-luck-ops" target="_blank" style="text-decoration: none; color: black; font-weight: 800">Clique aqui</a> para conferir!',
                'Obrigado pela sua atenção. Espero que tenha gostado e, qualquer sugestão, pode entrar em contato comigo pelo GitHub ou LinkedIn!',
                '- Davi Nascimento'
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
                "05/23/2024",
                "My name is Davi (also called David) and my mind, although I don't do it on purpose, is constantly hunting for new ideas. I came across a project on the internet about creating collectible cards with superheroes and that idea stuck in my head. I have more affinity with mythological creatures and that kind of fantasy. Inevitably, I thought: why not?",
                "This project helped me exercise and learn various concepts related to HTML, CSS, and JavaScript languages (using JQuery). And I find this incredibly fun. The events of a website seem like magic! I mean, if you're on the computer, you certainly noticed that hovering the mouse over the main screen sections makes the bars animate. Did you see how this scroll opened up for your reading? That's simply fascinating :P",
                "The process of creating the cards is also very cool. The advancement of artificial intelligences has made it possible for this project to be so customized for the purpose of entertaining with a collection of beautiful cards. Since it's a small project, there's no harm in using AI for the images. Obviously, in a bigger project, human artists are extremely important because they have full understanding and control of what needs to be created and what will be most appropriate. Human creativity is irreplaceable.",
                "Each glow around the cards represents the level of rarity:",
                "Silver: Common</p><p>Green: Rare</p><p>Blue: Super-rare</p><p>Gold: Epic</p><p>Purple: Legendary",
                "I made the appearance and essence of characters based on people close to me, aka friends! :P",
                "And all this was only possible because I was too bored not to be creating anything. The whole reason in a nutshell: BOREDOM!",
                "I recently created a game called Cyber Luck Ops. <a href='https://johnnyw23.github.io/cyber-luck-ops' target='_blank' style='text-decoration: none; color: black; font-weight: 800'>Click here</a> to check it out!",
                "Thank you for your attention. I hope you liked it and, for any suggestions, you can contact me through GitHub or LinkedIn!", "- Davi Nascimento"
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
            <br><br>\
        ');
        for(i = 0; i < traducao[num].scroll.paragrafos.length; i++){
            $('.scroll-escritos').append('\
                <p>' + traducao[num].scroll.paragrafos[i] + '</p>\
                <br>\
            ');
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
                    $('.main-wraper').css('min-height', '0px');
                    $('.sobre').fadeIn(500);
                    $('.opacity-bg').fadeIn(500);
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
                $('.opacity-bg').fadeOut(500);
                $('.scroll-escritos-wraper').animate({
                    scrollTop: $(document).height() * -1
                }, 0);
                $('.scroll-escritos-wraper').slideToggle(500);
                setTimeout(() => {
                    $('.main-wraper').css('min-height', '900px');
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
