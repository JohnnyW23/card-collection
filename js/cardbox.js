
var transition = false;
var flipped = false;

$(() => {
    var graus = 180;
    setInterval(() => {
        graus = (graus + 1) % 360;
        let gradient = 'linear-gradient(' + graus + 'deg, darkmagenta, magenta, rgb(255, 120, 255), white, var(--cor), var(--cor), var(--cor), var(--cor))';
        $('.legendary').css('background', gradient);

        gradient = 'linear-gradient(' + graus + 'deg, rgb(226, 192, 0), yellow, rgb(255, 255, 120), white, var(--cor), var(--cor), var(--cor), var(--cor))';
        $('.epic').css('background', gradient);

        gradient = 'linear-gradient(' + graus + 'deg, blue, rgb(0, 247, 255), rgb(132, 251, 255), white, var(--cor), var(--cor), var(--cor), var(--cor))';
        $('.super-rare').css('background', gradient);

        gradient = 'linear-gradient(' + graus + 'deg, rgb(0, 68, 0), lime, greenyellow, white, var(--cor), var(--cor), var(--cor), var(--cor))';
        $('.rare').css('background', gradient);

        gradient = 'linear-gradient(' + graus + 'deg, grey, silver, #ccc, white, var(--cor), var(--cor), var(--cor), var(--cor))';
        $('.common').css('background', gradient);

    }, 30);


    $('.arrow-next').click(function(){
        if(!transition){
            transition = true;

            if(flipped){
                $('.selected').click(); 
            }

            let cartas = Array.from(document.querySelectorAll('.carta-wraper'));
            let selected = document.querySelector('.selected');
            let index = cartas.indexOf(selected);
            let number = index;
            let next;
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
            $('.next').removeClass('next')

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

            if(flipped){
                $('.selected').click(); 
            }

            let cartas = Array.from(document.querySelectorAll('.carta-wraper'));
            let selected = document.querySelector('.selected');
            let index = cartas.indexOf(selected);
            let number = index;
            let prev;
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

    $(window).resize(function() {
        location.reload();
    });

    $(document).on("click", ".selected", function(){
        if(!flipped){
            flipped = true;
            $(this).find('.carta').css('transform', 'rotateY(180deg)');
            $(this).find('.carta-info-wrap').css('top', '4px').css('left', '5px');
            setTimeout(() => {
                $(this).find('.carta-back').css('display', 'block')
            }, 130);
        }else{
            flipped = false;
            $(this).find('.carta').css('transform', 'rotateY(0deg)');
            $(this).find('.carta-info-wrap').css('top', '4px').css('left', '5px');
            setTimeout(() => {
                $(this).find('.carta-back').css('display', 'none')
            }, 130);
        }
    })

    $('#btn-voltar').click(function(){
        
        if(!tela.main){
            tela.main = true;
            tela.colecao = false;


            $('.collection-box-wraper').fadeOut(500);
            setTimeout(() => {
                $('.main-wraper').fadeIn(500)
            }, 500);
            setTimeout(() => {
                $('.card-box').html(tela.colecaoInitial)
                $('.bg-img').css('background-image', 'url(assets/bg/vampire.jpg)')
            }, 1000);
        }
    })
})