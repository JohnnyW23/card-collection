animacao = {
    graus: 180,
    ordemOpen: false,
    ordemSlct: false
}

// Essa função gera as cartas e informações da carta dentro de .card-box e .lore, respectivamente, dependendo das informações contidas no parâmetro e dependendo do idioma escolhido
function construirCartas(obj, clear=false){
    for(i = 0; i < obj.length; i++){
        let mensagem, info, valor, titulo;

        if(tela.idioma == 'portugues'){
            mensagem = obj[i].mensagem.portugues;
            valor = obj[i].sobre.portugues
            info = ['Nome: ', 'Idade: ', 'Classe: ', 'Raridade: '];
            titulo = 'INFORMAÇÕES DA CARTA'

        }else if(tela.idioma == 'ingles'){
            mensagem = obj[i].mensagem.ingles;
            valor = obj[i].sobre.ingles;
            info = ['Name: ', 'Age: ', 'Class: ', 'Rarity: '],
            titulo = 'CARD INFO'
        }

        $('.card-box').append('\
        <div class="carta-wraper">\
            <div class="carta">\
                <div class="carta-info-wrap ' + obj[i].raridade + '">\
                    <div class="carta-back" style="background-image: url(../assets/card-back/' + obj[i].classe + '.jpg)">\
                        <div class="carta-back-brilho"></div>\
                    </div>\
                    <div class="carta-img" id="' + obj[i].id + '" style="background-image: url(../assets/card-front/' + obj[i].id + '.jpg)">\
                        <div class="carta-img-brilho"></div>\
                        <h3 class="carta-nome ' + obj[i].raridade + '">' + obj[i].nome + '</h3>\
                    </div>\
                    <div class="card-divider"></div>\
                    <div class="carta-status">\
                        <p>' + mensagem + '</p>\
                    </div>\
                </div>\
            </div>\
        </div>')

        $('.lore').append('\
            <div id="' + obj[i].id + '" style="display: none">\
                <h1 style="text-align: center">' + titulo + ' ' + obj[i].posicao + '</h1><br>\
                <span style="font-weight: 800">' + info[0] + '</span><span>' + obj[i].nome + '</span>\
                <br>\
                <span style="font-weight: 800">' + info[1] + '</span><span>' + obj[i].idade + '</span>\
                <br>\
                <span style="font-weight: 800">' + info[2] + '</span><span>' + valor.classe + '</span>\
                <br>\
                <span style="font-weight: 800">' + info[3] + '</span><span>' + valor.raridade + '</span>\
                <br>\
            </div>\
        ')

        for(l = 0; l < valor.lore.length; l++){
            $('.lore div#' + obj[i].id).append('\
                <br>\
                <p>' + valor.lore[l] + '</p>\
            ')
        }
    }

    $('.bg-img').css('background-image', 'url(assets/bg/' + obj[0].id + '.jpg)');

    $('.carta-wraper').eq(0).addClass('selected');
    $('.carta-wraper').eq(1).addClass('next');
    $('.carta-wraper').eq($('.carta-wraper').length - 1).addClass('prev');

    $('.lore div').eq(0).css('display', 'block');

    // Intervalo que faz girar o brilho ao redor da carta
    if(clear)
        clearInterval(girarBrilho)

    girarBrilho = setInterval(() => {
        animacao.graus = (animacao.graus + 1) % 360;
        let gradient = 'linear-gradient(' + animacao.graus + 'deg, rgb(226, 192, 0), yellow, rgb(255, 255, 120), white, var(--cor), var(--cor), var(--cor), var(--cor))';
        $('div.legendary').css('background', gradient);

        gradient = 'linear-gradient(' + animacao.graus + 'deg, rgb(200, 0, 0), red, rgb(255, 120, 120), white, var(--cor), var(--cor), var(--cor), var(--cor))';
        $('div.epic').css('background', gradient);

        gradient = 'linear-gradient(' + animacao.graus + 'deg, darkmagenta, magenta, rgb(255, 120, 255), white, var(--cor), var(--cor), var(--cor), var(--cor))';
        $('div.super-rare').css('background', gradient);

        gradient = 'linear-gradient(' + animacao.graus + 'deg, blue, rgb(0, 247, 255), rgb(132, 251, 255), white, var(--cor), var(--cor), var(--cor), var(--cor))';
        $('div.rare').css('background', gradient);

        gradient = 'linear-gradient(' + animacao.graus + 'deg, grey, silver, #ccc, white, var(--cor), var(--cor), var(--cor), var(--cor))';
        $('div.common').css('background', gradient);

    }, 30);
}

// Após adicionar as cartas, é necessário ativar as funções referentes às mecânicas aplicadas às classes criadas para os elementos das cartas
function ativarCardBox (){
    var transition = false;
    var flipped = false;
    var flipping = false

    // Eventos ao clicar nas setas de direção do slide de cartas
    $('.arrow-circle-wrap').click(function(){
        if(!transition && tela.colecao){
            transition = true;
            setTimeout(() => {transition = false}, 500);

            if(flipped)
                $('.selected').click(); 

            let index = $('.carta-wraper').index($('.selected'));
            let penultima = $('.carta-wraper').length - 2;
            let ultima = $('.carta-wraper').length - 1;
            let reverse = false;
            let after;

            // Caso queira ver a próxima carta
            if($(this).is('.arrow-next')){
                // Código para definir a carta seguinte em relação à .next
                if(index == penultima)
                    after = 0
                else if(index == ultima)
                    after = 1
                else
                    after = index + 2

            // Caso queira ver a carta anterior
            }else{
                // Código para definir a carta seguinte em relação à .prev
                if(index == 0)
                    after = penultima
                else if(index == 1)
                    after = ultima
                else
                    after = index - 2
                reverse = true
            }
        
            designarCartas(after, reverse);
        }
    })

    // Função que controla as classes das cartas para animação, a depender da direção de movimento. Também altera o quadro de informações da carta
    function designarCartas(index, reverse=false){
        let start = 'prev';
        let end = 'next';

        if(reverse){
            start = 'next';
            end = 'prev';
        }

        $('.lore #' + $('.selected .carta-img').attr('id')).css('display', 'none');
        $('.lore #' + $('.' + end +  ' .carta-img').attr('id')).css('display', 'block');

        $('.' + start).toggleClass(start);
        $('.selected').toggleClass(start).toggleClass('selected');
        $('.' + end).toggleClass('selected').toggleClass(end);
        $('.carta-wraper').eq(index).toggleClass(end);

        $('.bg-img').css('background-image', 'url(assets/bg/' + $('.selected .carta-img').attr('id') + '.jpg)');
    }

    // Função que rotaciona das cartas ao clicar nelas
    $(document).on("click", ".selected", function(){
        if(!flipping && tela.colecao){
            flipping = true;
            setTimeout(() => {flipping = false}, 500);

            if(!flipped){
                flipped = true;
                $(this).find('.carta').css('transform', 'rotateY(180deg)');
                setTimeout(() => {
                    $(this).find('.carta-back').css('display', 'block')
                }, 130);
            }else{
                flipped = false;
                $(this).find('.carta').css('transform', 'rotateY(0deg)');
                setTimeout(() => {
                    $(this).find('.carta-back').css('display', 'none')
                }, 130);
            }

            $(this).find('.carta').css('scale', '1.2').css('box-shadow', '0 0 40px black')
            setTimeout(() => {
                $(this).find('.carta').css('scale', '1').css('box-shadow', '0 0 20px black')
            }, 250);
        }
        
    })

    // Ao clicar no botão para voltar, a card box também é restaurada pro estado inicial
    $('#btn-voltar').click(function(){
        if(!tela.main && tela.colecao && !transition){
            if($('.carta-ordem').is('.ordem-active'))
                $('.carta-ordem').click();

            tela.main = true;
            tela.colecao = false;

            $('.collection-box-wraper').fadeOut(500);
            $('.bg-img').fadeOut(500);

            setTimeout(() => {
                $('.main-wraper').fadeIn(500)
            }, 500);
        }
    })
}

// Abaixo segue as funções referentes à visualização de cartas em determinada ordem ou apenas determinada raridade

// Função que anima a janela das ordens de carta
$('.carta-ordem').click(function(){
    if(!animacao.ordemOpen && tela.colecao){
        animacao.ordemOpen = true;
        setTimeout(() => {animacao.ordemOpen = false}, 500);
        $(this).toggleClass('ordem-active');
    }
});

// Função que determina qual ordem/raridade visualizar
$('.ordem-opcoes li').click(function(){
    if(!animacao.ordemSlct && tela.colecao){
        animacao.ordemSlct = true
        setTimeout(() => {animacao.ordemSlct = false}, 1000);

        if($(this).is(':not(.ordem-selected)')){
            $('.ordem-selected').css('text-shadow', 'none');
            $('.ordem-selected').toggleClass('ordem-selected');
            $(this).toggleClass('ordem-selected');
            let id = $(this).attr('id'); 

            definirDeck(id);
        }
    }
})

// Função que criará uma nova lista de deck das cartas, a depender da raridade escolhida
function transferirCartas(obj, newDeck, raridade){
    for(i = 0; i < obj.length; i++){
        if(obj[i].raridade == raridade){
            newDeck.push(obj[i])
        }
    }
}

// Função que evita repetição nas ordens "crescente" e "decrescente de visualização"
function iterarRaridade(obj, newDeck, lista){
    for(c = 0; c < lista.length; c++){
        transferirCartas(obj, newDeck, lista[c])
    }
}

function ativarTxtShd(cor){
    $('.ordem-selected').css('text-shadow', '0 0 10px ' + cor + ', 0 0 20px ' + cor + ', 0 0 30px ' + cor)
}

// Função onde será filtrada a raridade escolhida e adicionado o text shadow correspondente
function definirDeck(id){
    let deck = []
    let crescente = ['legendary', 'epic', 'super-rare', 'rare', 'common']

    if(id == 'todas'){
        ativarTxtShd('white');
        deck = cartas

    }else if(id == 'crescente'){
        ativarTxtShd('white')
        iterarRaridade(cartas, deck, crescente);

    }else if(id == 'decrescente'){
        ativarTxtShd('white');
        crescente.reverse();
        iterarRaridade(cartas, deck, crescente);

    }else if(id == 'reverse'){
        ativarTxtShd('white');
        deck = cartas.slice().reverse();

    }else{
        if(id == 'legendary'){
            ativarTxtShd('gold');
            deck = cartas
    
        }else if(id == 'epic'){
            ativarTxtShd('red');
            deck = cartas
    
        }else if(id == 'super-rare'){
            ativarTxtShd('fuchsia');
            transferirCartas(cartas, deck, id)
    
        }else if(id == 'rare'){
            ativarTxtShd('aqua');
            transferirCartas(cartas, deck, id)
    
        }else if(id == 'common'){
            ativarTxtShd('grey');
            deck = cartas
        }


    }

    $('.card-box').html('');
    $('.lore').html('');
    construirCartas(deck, true);
}