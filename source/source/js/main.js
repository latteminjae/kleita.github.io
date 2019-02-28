if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'
}

$(()=>{

    const pageHeight = $('section').height();
    var pageNum = 0;

    $(window).on('mousewheel',function(event){
        if($('body, html').is(':animated')==true){
            return;
        };

        
        if(event.deltaY<0){
            if(pageNum>4){
                return
            }
            pageNum += 1;
            const upHeight = pageNum * pageHeight;
            $('body, html').animate({scrollTop:upHeight},600);
            $('#slideBox li').removeClass('on');
            document.getElementById('slideBox').children[pageNum].classList.add('on')
            if(pageNum>4){
                $('header').addClass('on')
            } else {
                $('header').removeClass()
            }
            if(pageNum>2){
                $('#bg_0').removeClass();
                $('#bg_1').addClass('on');
            }
            if(pageNum == 1){
                setTimeout(() => {
                    typing(0);
                }, 800);
            }
        } else {
            if(pageNum<1){
                return
            }
            pageNum -= 1;
            console.log(pageNum)
            const upHeight = pageNum * pageHeight;
            $('body, html').animate({scrollTop:upHeight},600);
            $('#slideBox li').removeClass('on');
            document.getElementById('slideBox').children[pageNum].classList.add('on')
            if(pageNum<1){
                $('header').addClass('on')
            } else {
                $('header').removeClass()
            }
            if(pageNum<3){
                $('#bg_1').removeClass();
                $('#bg_0').addClass('on');
            }
            if(pageNum == 1){
                setTimeout(() => {
                    typing(0);
                }, 800);
            }
        }
    })

    const typingTxt = [
        'ㄱ','그','그ㄹ','그러','그런','그런ㄷ','그런데','그런데 ','그런데 ㅁ','그런데 마',
        '그런데 마ㅈ','그런데 마제','그런데 마젠','그런데 마젠ㅌ','그런데 마젠타',
        '그런데 마젠타ㄱ','그런데 마젠타가','그런데 마젠타가 ','그런데 마젠타가 ㅁ',
        '그런데 마젠타가 무','그런데 마젠타가 뭐','그런데 마젠타가 뭔','그런데 마젠타가 뭔ㄱ',
        '그런데 마젠타가 뭔가','그런데 마젠타가 뭔가ㅇ','그런데 마젠타가 뭔가요',
        '그런데 마젠타가 뭔가요?'
    ]
    function typing(i){
        const input_ = $('#typing');
        for (var i=0;i<=typingTxt.length;i++) {
            (function(ind) {
                setTimeout(function(){
                    input_.text(typingTxt[ind])
                }, 80 * ind);
            })(i);
         }
    }

    $('#slideBox .p1 .searchBtn').on('click',function(){
        typing(0);
    });

    const tileSet = `<li><span></span><img src="../img/p3_tile_0.jpg" alt=""></li>
        <li><span></span><img src="../img/p3_tile_1.jpg" alt=""></li>
        <li><span></span><img src="../img/p3_tile_2.jpg" alt=""></li>`

    function tileAni(){
        $('#tileAni li').remove();
        for(i=0;i<5;i++){
            $('#tileAni').append(tileSet);
        }
    }
    tileAni();
})