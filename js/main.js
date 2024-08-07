tela = {
    idioma: true,
    main: false,
    sobre: false,
    colecao: false,
}

// Definição do conteúdo dos elementos da tela principal do site baseado no idioma de escolha na tela inicial
function traduzirSite(){
    if(tela.idioma == 'portugues'){
        traducao = {
            scroll: {
                titulo: 'Tudo se resume a uma palavra...',
                paragrafos: [
                    '02/06/2024',
                    'Meu nome é Davi (também chamado de David) e minha mente, por mais que eu não faça de propósito, está constantemente caçando novas ideias. Me deparei com um projeto na internet sobre a criação de cartas colecionáveis com super-heróis e essa ideia ficou na minha cabeça. Tenho mais afinidade com criaturas mitológicas e esse tipo de fantasia. De modo inevitável, pensei: por que não?',
                    'Esse projeto me ajudou a exercitar e aprender diversos conceitos em relação às linguagems HTML, CSS e JavaScript (utilizando JQuery). E eu acho isso incrivelmente divertido. Os eventos de um site parecem mágica! Quero dizer, se você está no computador, percebeu que passar o mouse nas sessões da tela principal faz as barras se animarem. Você viu como esse pergaminho se abriu pra sua leitura? Isso é simplesmente fascinante :P',
                    'O processo de criação das cartas também é muito legal. O avanço das inteligências artificiais tornou possível esse projeto ser tão personalizado para o propósito de entreter com uma coleção de lindas cartas. Como se trata de um projeto pequeno, não há mal em utilizar a I.A. para as imagens. Obviamente, em um projeto maior, artistas humanos são importantíssimos porque possuem total entendimento e controle do que precisa ser criado e o que será mais adequado. A criatividade humana é insubstituível.',
                    'Cada brilho ao redor das cartas representa o nível de raridade:',
                    'Prata: Comum</p><p>Azul: Raro</p><p>Roxo: Super-raro</p><p>Vermelho: Épico</p><p>Dourado: Lendário',
                    'Você pode escolher critérios para ver as cartas: Ver todas em ordem de index; mais raras primeiro; menos raras primeiro; apenas um tipo de raridade e em ordem reversa de index.',
                    'Eu fiz a aparência e essência de alguns personagens baseado em pessoas próximas de mim, também conhecidas como amigos! :P',
                    'E tudo isso só foi possível porque fiquei entediado demais para não estar criando nada. Tudo se resumiu a essa palavra: TÉDIO!',
                    'Recentemente criei um jogo chamado Cyber Quest Ops. <a href="https://johnnyw23.github.io/cyber-quest" target="_blank" style="text-decoration: none; color: black; font-weight: 800">Clique aqui</a> para conferir!',
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
        }

    }else if(tela.idioma == 'ingles'){
        traducao = {
            scroll: {
                titulo: 'The whole reason in a nutshell...',
                paragrafos: [
                    "05/23/2024",
                    "My name is Davi (also called David) and my mind, although I don't do it on purpose, is constantly hunting for new ideas. I came across a project on the internet about creating collectible cards with superheroes and that idea stuck in my head. I have more affinity with mythological creatures and that kind of fantasy. Inevitably, I thought: why not?",
                    "This project helped me exercise and learn various concepts related to HTML, CSS, and JavaScript languages (using JQuery). And I find this incredibly fun. The events of a website seem like magic! I mean, if you're on the computer, you certainly noticed that hovering the mouse over the main screen sections makes the bars animate. Did you see how this scroll opened up for your reading? That's simply fascinating :P",
                    "The process of creating the cards is also very cool. The advancement of artificial intelligences has made it possible for this project to be so customized for the purpose of entertaining with a collection of beautiful cards. Since it's a small project, there's no harm in using AI for the images. Obviously, in a bigger project, human artists are extremely important because they have full understanding and control of what needs to be created and what will be most appropriate. Human creativity is irreplaceable.",
                    "Each glow around the cards represents the level of rarity:",
                    "Silver: Common</p><p>Blue: Rare</p><p>Purple: Super-rare</p><p>Red: Epic</p><p>Gold: Legendary",
                    "You can choose criteria to view the cards: See all in index order; rarest first; least rare first; only one type of rarity and in reverse order of index.",
                    "I made the appearance and essence of some characters based on people close to me, aka friends! :P",
                    "And all this was only possible because I was too bored not to be creating anything. The whole reason in a nutshell: BOREDOM!",
                    "I recently created a game called Cyber Quest Ops. <a href='https://johnnyw23.github.io/cyber-quest' target='_blank' style='text-decoration: none; color: black; font-weight: 800'>Click here</a> to check it out!",
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
    }
}


// Ao clicar no idioma escolhido
$('.idiomas img').click(function(){
    if(tela.idioma){
        tela.idioma = $(this).attr('id');
        traduzirSite(); // Primeiro é necessário definir qual será a tradução do site
        traduzirMain(); // Depois é necessário inserir os elementos que foram definidos conforme o idioma de escolha do usuário
        construirCartas(cartas); // Aqui as cartas são introduzidas ao .card-box

        $('.idiomas-wraper').fadeOut(500);
        setTimeout(() => {
            $('.page-wraper').fadeIn(500);
            $('.page-wraper').css('display', 'grid');
            tela.main = true
            ativarMain(); // Ativação das funções da tela principal após seus elementos serem inseridos
            ativarCardBox(); // Ativação das funções do .card-box após seus elementos serem inseridos
        }, 500);
    }
})


// Inserção do conteúdo escrito na tela principal
function traduzirMain(){
    $('#sobre .secao-descricao').append('\
        <h2>' + traducao.sobre[0] + '</h2>\
        <p>' + traducao.sobre[1] + '</p>\
    ');
    $('#colecao .secao-descricao').append('\
        <h2>' + traducao.colecao[0] + '</h2>\
        <p>' + traducao.colecao[1] + '</p>\
    ');
    $('#github .secao-descricao').append('\
        <h2>' + traducao.github[0] + '</h2>\
        <p>' + traducao.github[1] + '</p>\
    ');
    $('.voltar-btn').append('<h2>' + traducao.voltar_btn  + '</h2>');
    $('.scroll-escritos').append('\
        <h1>' + traducao.scroll.titulo + '</h1>\
        <br><br>\
    ');
    for(i = 0; i < traducao.scroll.paragrafos.length; i++){
        $('.scroll-escritos').append('\
            <p>' + traducao.scroll.paragrafos[i] + '</p>\
            <br>\
        ');
    };
    $('.scroll-escritos').append('<i id="retornar" class="fa-solid fa-arrow-right-to-bracket" style="display: block; margin: 0 auto; width: 20px"></i>');
}


// Função que ativa eventos da tela principal agora que seus elementos foram inseridos
function ativarMain(){
    $('#sobre').click(function(){
        if(!tela.sobre){
            tela.main = false;
            tela.sobre = true;
            $('.sessoes').fadeOut(500);
            setTimeout(() => {
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
                $('.sessoes').fadeIn(500);
                $('.scroll-escritos-wraper').hide();
            }, 500);
        }
    })

    $('#colecao').click(function(){
        if(!tela.colecao){
            tela.colecao = true;
            tela.main = false;

            $('.main-wraper').fadeOut(500);
            setTimeout(() => {
                $('.collection-box-wraper').fadeIn(500);
                $('.bg-img').fadeIn(500);
            }, 500);
        }
    })

    $('#github').click(function(){
        window.open('https://github.com/JohnnyW23', '_blank')
    })
}