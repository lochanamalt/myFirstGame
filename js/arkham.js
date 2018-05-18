/**
 * Created by Lochana-PC on 2018-02-11.
 */
var array=[];
var batrangs=[];
var score=0;


var interval4=setInterval(createobject,300);

var interval1=setInterval(removeObject,100);
var interval2=setInterval(jokerblast,1);
var interval3=setInterval(gameOver,10);
var interval5=setInterval(centerOnBatMobile,50);
$(window).keydown(function (ev) {
    if(ev.which === 38) {
        var top = $(".bat").css("top");
        var topNum = parseInt(top.substring(0, (top.length - 2)));
        var left = $(".bat").css("left");
        var leftNum = parseInt(left.substring(0, (left.length - 2)));
        if(leftNum<1080){
            if(topNum!=0){
                $(".bat").css("top", topNum - 7);
            }
        }else{
            $(".bat").css("top", topNum - 7);
        }
    }else if(ev.which === 40){
        var top = $(".bat").css("top");
        var topNum = parseInt(top.substring(0, (top.length - 2)));
        if(topNum!=475){
            $(".bat").css("top", topNum + 7);
        }
    }else if(ev.which === 39){
        var left = $(".bat").css("left");
        var leftNum = parseInt(left.substring(0, (left.length - 2)));
        if(leftNum!=1250){
            $(".bat").css("left", leftNum + 7);
        }
    }else if(ev.which === 37) {
        var left = $(".bat").css("left");
        var leftNum = parseInt(left.substring(0, (left.length - 2)));
        var top = $(".bat").css("top");
        var topNum = parseInt(top.substring(0, (top.length - 2)));
        console.log(leftNum);
        console.log(topNum);
        if (leftNum != 0) {
            if (topNum < 0 && leftNum > 1080) {
                $(".bat").css("left", leftNum - 7);
            } else if (topNum >= 0) {
                $(".bat").css("left", leftNum - 7);

            }
        }

    }


});
$(window).keyup(function (ev){
    if(ev.which===32){
        $("#batarang").trigger('play');
        batrang();
    }
});

function randomNo() {
    var x = Math.floor((Math.random() * 10) + 1);
    return x;
}

function  createobject() {
    var i=randomNo();
    var j=randomNo();

    var o=$("#content").append("<div><img src='img/joker.gif' class='joker'></div>");
    $('#content').children().last().children().first().css("width","60px");
    $('#content').children().last().children().first().css("padding","o");
    $('#content').children().last().children().first().css("margin","o");
    $('#content').children().last().children().first().css("height","auto");
    $('#content').children().last().children().first().css("position","absolute");
    $('#content').children().last().children().first().css("top",j*45);

    var jokerPosition = $('#content').children().last().children().first().offset().top;

    $('#content').children().last().children().first().animate({
        left :0

    },5000,'linear');

    var ar=  $('#content').children().last().children().first();
    array.push(ar);

}


function removeObject() {

    for(var i=0 ;i<array.length;i++){
        var object=array[i];
        var positionLeft=parseInt($(object).css("left"));
        var positionTop=parseInt($(object).css("top"));

        if (positionLeft==0){

            $(object).remove();
            array.splice(i,1);

        }
    }
}

function jokerblast() {

    for(var i=0 ;i<array.length;i++){
        var object=array[i];
        var positionLeft=parseInt($(object).css("left"));
        var positionTop=parseInt($(object).css("top"));

        for(var x=0;x<batrangs.length;x++) {
            var rang = batrangs[x];
            var top = parseInt($(rang).css("top"));
            var left = parseInt($(rang).css("left"));

            if (Math.abs(positionTop - top) < 45  && Math.abs(positionLeft - left) < 30) {

                score = score + 5;
                var val="Score :"+ score;
                $("#score").text(val);
                $(object).remove();
                array.splice(i, 1);
                $(rang).remove();
                batrangs.splice(x, 1);
            }

        }
    }

}

function gameOver() {
    var Left=parseInt($('.bat').css("left"));
    var Top=parseInt($('.bat').css("top"));

    for(var i=0 ;i<array.length;i++){
        var object=array[i];
        var positionLeft=parseInt($(object).css("left"));
        var positionTop=parseInt($(object).css("top"));

        if (Math.abs(positionTop - Top) < 60  && Math.abs(positionLeft - Left) < 60) {
            $("#background").trigger('pause');
            $("#attack").trigger('play');
            alert("Game Over");
            clearInterval(interval1);
            clearInterval(interval2);
            clearInterval(interval3);
            clearInterval(interval4);
            clearInterval(interval5);
            location.reload();


        }
    }
}
function batrang(){
    var top = $(".bat").css("top");
    var topNum = parseInt(top.substring(0, (top.length - 2)));

    var left=$(".bat").css("left");
    var leftNum = parseInt(left.substring(0, (left.length - 2)));
    $("#content").children().first().append("<div><img src='img/anim.gif' class='batrang'></div>");
    $('#content').children().first().children().last().children().first().css("width","40px");
    $('#content').children().first().children().last().children().first().css("padding","o");
    $('#content').children().first().children().last().children().first().css("margin","o");
    $('#content').children().first().children().last().children().first().css("height","auto");
    $('#content').children().first().children().last().children().first().css("position","absolute");
    $('#content').children().first().children().last().children().first().css("top",topNum);
    $('#content').children().first().children().last().children().first().css("left",leftNum + 60);

    $('#content').children().first().children().last().children().first().animate({
        left :"100%"

    },5000/(leftNum+10),'linear');

    var ar=  $('#content').children().first().children().last().children().first();
    batrangs.push(ar);

}

function centerOnBatMobile(){
    var Left=parseInt($('.bat').css("left"));
    var Top=parseInt($('.bat').css("top"));

   if (Top < -20 && Left > 1080) {
       $("#background").trigger('pause');
       $("#tada").trigger('play');

       $(".mobile").remove();
       $(".bat").css('visibility',"hidden");
        $(".mobile2").css('visibility',"visible");
       for(var i=0 ;i<array.length;i++){
           array[i].remove();
       }
       for(var i=0 ;i<batrangs.length;i++){
           batrangs[i].remove();
       }

       clearInterval(interval1);
       clearInterval(interval2);
       clearInterval(interval3);
       clearInterval(interval4);
       clearInterval(interval5);
       $("#content").append("<div><img src='img/Awesome_Face_Batman.png'></div>");
       $('#content').children().last().children().first().css("width","250px");
       $('#content').children().last().children().first().css("padding","o");
       $('#content').children().last().children().first().css("margin","o");
       $('#content').children().last().children().first().css("height","auto");
       $('#content').children().last().children().first().css("position","absolute");
       $('#content').children().last().children().first().css("top","35%");
       $('#content').children().last().children().first().css("left","40%");

alert("You've WON");

   }


}
