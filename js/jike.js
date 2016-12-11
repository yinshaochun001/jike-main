/**
 * Created by Administrator on 2016/9/10.
 */
/*************头部*************/
$('.nav li').hover(function(){
    $(this).find('ul').toggle()
})
$('.user li').hover(function(){
    $(this).find('div').toggle()
})
/*******回顶部*********/
$('#gotop-y').click(
    function(){
        var speed=300;
        $('body,html').animate({scrollTop:0},speed)
    }
)
window.onscroll=function(){
    var stop = document.documentElement.scrollTop
        || window.pageYOffset || document.body.scrollTop;
    //console.log(stop);
    var go=document.getElementById('gotop-y');
    //stop==0?go.style.display='none':go.style.display='block';
    if(stop==0){
        $('#gotop-y').fadeOut();
    }
    else{
        $('#gotop-y').fadeIn();
    }
}
/********************/
var w=window.screen.availWidth;
//alert(w);


