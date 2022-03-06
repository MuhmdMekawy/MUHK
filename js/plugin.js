window.onload = function(){
    $('.load').fadeOut()
}
$(document).ready(function(){
    $('.test-slider').owlCarousel({
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
        loop:true,
        margin:10,
        dots:false,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            770:{
                items:2
            },
            990:{
                items:3
            }
        }
    })
    var sc = document.querySelector('.event .content .right .timer .sec h3')
    var min = document.querySelector('.event .content .right .timer .min h3')
    var hour = document.querySelector('.event .content .right .timer .hour h3')
    var day = document.querySelector('.event .content .right .timer .day h3')
    var timer = setInterval(function(){
        sc.innerHTML -=1;
        if (sc.innerHTML === "0"){
            sc.innerHTML = 59;
            min.innerHTML -= 1;
        }
        if (min.innerHTML === "0"){
            min.innerHTML = 59;
            hour.innerHTML -= 1;
        }
        if (hour.innerHTML === "0"){
            hour.innerHTML = 24;
            day.innerHTML -= 1;
        }
        if (day.innerHTML <= "0"){
            sc.innerHTML = 0;
            min.innerHTML = 0;
            hour.innerHTML = 0;
            day.innerHTML = 0;
            timer.clearInterval()
        }
    } , 1000)
    var vidTitle = document.querySelector('.video .content .right .text h6')
    $('.video .content .left .bottom ul li').click(function(){
        return vidTitle.innerHTML = $(this).find('h3').text()
    })
    var lis = document.querySelectorAll('.video .content .left .bottom ul li')
    var videoSrc = document.querySelector('.video .content .left .bottom ul li iframe')
    lis.forEach(li => {
        li.onclick = function(){
            $(this).css({
                "background-color" : "aliceblue"
            }).siblings().css("background-color" , "white").end().find('h3').css({
                "color" : "#2196f3"
            }).parent().siblings().find('h3').css("color" , "black")
            console.log('clicked')
            $('.video .content .right .one').show().siblings().hide()
            return $('.video .content .right iframe').attr('src' ,$(this).find('iframe').attr('src')) 
        }
    });
    $('.video .content .left .top button').click(function(){
        $(this).parent().parent().find('.bottom').slideToggle(500)
    })
    $(window).on('scroll' , function(){
        var src = $(window).scrollTop()
        var count = $('.stats').offset().top
        if (src > 1500){
            $('.up').show(500).click(function(){
                $(window).scrollTop(0)
            })
        }else{
            $('.up').hide(500)
        }
        if (src >= count){
            $('.stats .content .cont .one').prop('counter' , 0).animate({
                counter : 250
            }, {
                duration : 4000 ,
                easing : "swing" ,
                step : function(e){
                    $(this).text(Math.ceil(e))
                }
            })
            $('.stats .content .cont .two').prop('counter' , 0).animate({
                counter : 177
            }, {
                duration : 4000 ,
                easing : "swing" ,
                step : function(e){
                    $(this).text(Math.ceil(e))
                }
            })
            $('.stats .content .cont .three').prop('counter' , 0).animate({
                counter : 50
            }, {
                duration : 4000 ,
                easing : "swing" ,
                step : function(e){
                    $(this).text(Math.ceil(e))
                }
            })
            $('.stats .content .cont .four').prop('counter' , 0).animate({
                counter : 620
            }, {
                duration : 4000 ,
                easing : "swing" ,
                step : function(e){
                    $(this).text(Math.ceil(e))
                }
            })
        }
    })
    $('button').attr('aria-label' , "")
})