function construirCartas(){
    for(i = 0; i < cartas.length; i++){
        let mensagem, info, valor, titulo;
        if(tela.idioma == 'portugues'){
            mensagem = cartas[i].mensagem.portugues;
            valor = cartas[i].sobre.portugues
            info = ['Nome: ', 'Idade: ', 'Classe: ', 'Raridade: '];
            titulo = 'INFORMAÇÕES DA CARTA'

        }else if(tela.idioma == 'ingles'){
            mensagem = cartas[i].mensagem.ingles;
            valor = cartas[i].sobre.ingles;
            info = ['Name: ', 'Age: ', 'Class: ', 'Rarity: '],
            titulo = 'CARD INFO'
        }

        $('.card-box').append('\
        <div class="carta-wraper">\
            <div class="carta">\
                <div class="carta-info-wrap ' + cartas[i].raridade + '">\
                    <div class="carta-back" style="background-image: url(../assets/card-back/' + cartas[i].classe + '.jpg)">\
                        <div class="carta-back-brilho"></div>\
                    </div>\
                    <div class="carta-img" id="' + cartas[i].id + '" style="background-image: url(../assets/card-front/' + cartas[i].id + '.jpg)">\
                        <div class="carta-img-brilho"></div>\
                        <h3 class="carta-nome ' + cartas[i].raridade + '">' + cartas[i].nome + '</h3>\
                    </div>\
                    <div class="card-divider"></div>\
                    <div class="carta-status">\
                        <p>' + mensagem + '</p>\
                    </div>\
                </div>\
            </div>\
        </div>')

        $('.lore').append('\
            <div id="' + cartas[i].id + '" style="display: none">\
                <h1 style="text-align: center">' + titulo + '</h1><br>\
                <span style="font-weight: 800">' + info[0] + '</span><span>' + cartas[i].nome + '</span>\
                <br>\
                <span style="font-weight: 800">' + info[1] + '</span><span>' + cartas[i].idade + '</span>\
                <br>\
                <span style="font-weight: 800">' + info[2] + '</span><span>' + valor.classe + '</span>\
                <br>\
                <span style="font-weight: 800">' + info[3] + '</span><span>' + valor.raridade + '</span>\
                <br>\
            </div>\
        ')

        
        for(l = 0; l < valor.lore.length; l++){
            $('.lore div#' + cartas[i].id).append('\
                <br>\
                <p>' + valor.lore[l] + '</p>\
            ')
        }
    }

    $('.carta-wraper').eq(0).addClass('selected');
    $('.carta-wraper').eq(1).addClass('next');
    $('.carta-wraper').eq($('.carta-wraper').length - 1).addClass('prev');

    $('.lore div').eq(0).css('display', 'block');
}


function ativarCardBox (){
    var transition = false;
    var flipped = false;
    var flipping = false

    $(() => {
        var graus = 180;
        setInterval(() => {
            graus = (graus + 1) % 360;
            let gradient = 'linear-gradient(' + graus + 'deg, darkmagenta, magenta, rgb(255, 120, 255), white, var(--cor), var(--cor), var(--cor), var(--cor))';
            $('div.legendary').css('background', gradient);

            gradient = 'linear-gradient(' + graus + 'deg, rgb(226, 192, 0), yellow, rgb(255, 255, 120), white, var(--cor), var(--cor), var(--cor), var(--cor))';
            $('div.epic').css('background', gradient);

            gradient = 'linear-gradient(' + graus + 'deg, blue, rgb(0, 247, 255), rgb(132, 251, 255), white, var(--cor), var(--cor), var(--cor), var(--cor))';
            $('div.super-rare').css('background', gradient);

            gradient = 'linear-gradient(' + graus + 'deg, rgb(0, 68, 0), lime, greenyellow, white, var(--cor), var(--cor), var(--cor), var(--cor))';
            $('div.rare').css('background', gradient);

            gradient = 'linear-gradient(' + graus + 'deg, grey, silver, #ccc, white, var(--cor), var(--cor), var(--cor), var(--cor))';
            $('div.common').css('background', gradient);

        }, 30);


        $('.arrow-next').click(function(){
            if(!transition){
                transition = true;

                $('.lore #' + $('.selected .carta-img').attr('id')).css('display', 'none');

                if(flipped){
                    $('.selected').click(); 
                }

                let cartas = Array.from(document.querySelectorAll('.carta-wraper'));
                let selected = document.querySelector('.selected');
                let index = cartas.indexOf(selected);
                let number = index;
                if(number == $('.carta-wraper').length - 2)
                    next = 0
                else if(number == $('.carta-wraper').length - 1)
                    next = 1
                else
                    next = number + 2
                let prevTop = $('.prev').css('top');
                let prevLeft = $('.prev').css('left');
                let nextTop = $('.next').css('top');
                let nextLeft = $('.next').css('left');

                $('.prev').removeClass('prev');

                $('.selected').css('top', prevTop).
                css('left', prevLeft).
                css('opacity', '0');

                $('.selected').addClass('prev');
                $('.selected').removeClass('selected')
                $('.next').addClass('selected');
                $('.next').removeClass('next');

                $('.lore #' + $('.selected .carta-img').attr('id')).css('display', 'block');

                let nextIndex;
                if(index == $('.carta-wraper').length - 2)
                    nextIndex = 0
                else if(index == $('.carta-wraper').length - 1)
                    nextIndex = 1
                else
                    nextIndex = number + 2

                $('.carta-wraper').eq(nextIndex).addClass('next');
                $('.selected').css('top', nextTop).css('left', nextLeft);

                $('.selected').css('top', '0').
                css('left', '50%').
                css('opacity', '1').
                css('transform', 'translateX(-50%)')

                $('.next').css('top', nextTop).css('left', nextLeft);
                setTimeout(() => {
                    transition = false
                }, 500);

                $('.bg-img').css('background-image', 'url(assets/bg/' + $('.selected .carta-img').attr('id') + '.jpg)');

                setTimeout(() => {
                    if(flipped){
                        $('.next').click();
                    }
                }, 500);
            }
        })

        $('.arrow-prev').click(function(){
            if(!transition){
                transition = true

                $('.lore #' + $('.selected .carta-img').attr('id')).css('display', 'none');

                if(flipped){
                    $('.selected').click(); 
                }

                let cartas = Array.from(document.querySelectorAll('.carta-wraper'));
                let selected = document.querySelector('.selected');
                let index = cartas.indexOf(selected);
                let number = index;
                if(number == 1)
                    prev = $('.carta-wraper').length - 1
                else if(number == 0)
                    prev = $('.carta-wraper').length - 2
                else
                    prev = number - 2
                let prevTop = $('.prev').css('top');
                let prevLeft = $('.prev').css('left');
                let nextTop = $('.next').css('top');
                let nextLeft = $('.next').css('left');

                $('.next').removeClass('next');

                $('.selected').css('top', nextTop).
                css('left', nextLeft).
                css('opacity', '0');

                $('.selected').addClass('next');
                $('.selected').removeClass('selected')
                $('.prev').addClass('selected');
                $('.prev').removeClass('prev');

                $('.lore #' + $('.selected .carta-img').attr('id')).css('display', 'block');

                let prevIndex;
                if(index == 1)
                    prevIndex = $('.carta-wraper').length - 1
                else if(index == 0)
                    prevIndex = $('.carta-wraper').length - 2
                else
                    prevIndex = number - 2

                $('.carta-wraper').eq(prevIndex).addClass('prev');
                $('.selected').css('top', prevTop).css('left', prevLeft);

                $('.selected').css('top', '0').
                css('left', '50%').
                css('opacity', '1').
                css('transform', 'translateX(-50%)')

                $('.prev').css('top', prevTop).css('left', prevLeft);
                setTimeout(() => {
                    transition = false
                }, 500);

                $('.bg-img').css('background-image', 'url(assets/bg/' + $('.selected .carta-img').attr('id') + '.jpg)');
            }
        })

        $(document).on("click", ".selected", function(){
            if(!flipping){
                flipping = true
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
                $(this).find('.carta').css('scale', '1.15').css('box-shadow', '0 0 40px black')
                setTimeout(() => {
                    $(this).find('.carta').css('scale', '1').css('box-shadow', '0 0 20px black')
                }, 250);
                setTimeout(() => {
                    flipping = false
                }, 500);
            }
        })

        $('#btn-voltar').click(function(){
            
            if(!tela.main){
                tela.main = true;
                tela.colecao = false;

                $('.collection-box-wraper').fadeOut(500);
                $('.bg-img').fadeOut(500);

                setTimeout(() => {
                    $('.main-wraper').fadeIn(500)
                }, 500);
                setTimeout(() => {
                    $('.card-box').html(tela.colecaoInitial)
                }, 1000);
            }
        })

        $(window).resize(function(){
            $('.next').css('left', 'calc(100% + 200px)');
            $('.prev').css('left', '-200px');
        })
    })
}