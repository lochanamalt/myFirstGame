/**
 * Created by Lochana-PC on 2018-02-11.
 */
var array=[];
var batrangs=[];
var score=0;


var interval4=setInterval(createobject,500);

var interval1=setInterval(removeObject,100);
var interval2=setInterval(jokerblast,1);
var interval3=setInterval(gameOver,10);
var interval5=setInterval(centerOnBatMobile,50);
$(window).keydown(function (ev) {
    if(ev.which === 38) {
        let top = $(".bat").css("top");
        let topNum = parseInt(top.substring(0, (top.length - 2)));
        let left = $(".bat").css("left");
        let leftNum = parseInt(left.substring(0, (left.length - 2)));

        let offsets = $('#mobile').offset();
        let bat_mobile_width = parseInt($(".mobile").css("width"));
    
        let bat_mobile_left = offsets.left; 
        let get_onto_car_left = bat_mobile_left + 10;

        console.log(get_onto_car_left);
        console.log(leftNum)
        if(leftNum <= get_onto_car_left){
            if(topNum>0){
                $(".bat").css("top", topNum - 10);
            }
        }else{
            $(".bat").css("top", topNum - 10);
        }
    }else if(ev.which === 40){
      
        let top = $(".bat").css("top");
        let topNum = parseInt(top.substring(0, (top.length - 2)));
        if(topNum!=475){
            $(".bat").css("top", topNum + 10);
        }
    }else if(ev.which === 39){
        let left = $(".bat").css("left");
        let leftNum = parseInt(left.substring(0, (left.length - 2)));
        if(leftNum!=1250){
            $(".bat").css("left", leftNum + 10);
        }
    }else if(ev.which === 37) {
        let left = $(".bat").css("left");
        let leftNum = parseInt(left.substring(0, (left.length - 2)));
        let top = $(".bat").css("top");
        let topNum = parseInt(top.substring(0, (top.length - 2)));
  
        if (leftNum != 0) {
            let offsets = $('#mobile').offset();
            let bat_mobile_width = parseInt($(".mobile").css("width"));
        
            let bat_mobile_left = offsets.left; 
            let get_onto_car_left = bat_mobile_left + 10;

            
            if (topNum < 0 && leftNum > get_onto_car_left) {
                $(".bat").css("left", leftNum - 10);
            } else if (topNum > -2) {
                $(".bat").css("left", leftNum - 10);

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

function randomNo(limit) {
    return Math.floor(Math.random() * limit) + 1;
}

function  createobject() {

    let content_height = parseInt($("#content").css("height"));

    let j=randomNo(content_height-40);

    let o=$("#content").append("<div><img src='img/joker.gif' class='joker'></div>");
    $('#content').children().last().children().first().css("width","60px");
    $('#content').children().last().children().first().css("padding","o");
    $('#content').children().last().children().first().css("margin","o");
    $('#content').children().last().children().first().css("height","auto");
    $('#content').children().last().children().first().css("position","absolute");
    $('#content').children().last().children().first().css("top",j);


    $('#content').children().last().children().first().animate({
        left :0

    },10000,'linear');

    let ar=  $('#content').children().last().children().first();
    array.push(ar);

}


function removeObject() {

    for(let i=0 ;i<array.length;i++){
        let object=array[i];
        let positionLeft=parseInt($(object).offset().left);
        if (positionLeft==0){

            $(object).remove();
            array.splice(i,1);

        }
    }
}

function jokerblast() {

    for(let i=0 ;i<array.length;i++){
        let object=array[i];
        let positionLeft=parseInt($(object).offset().left);
        let positionTop=parseInt($(object).offset().top);


        for(let x=0;x<batrangs.length;x++) {
            let rang = batrangs[x];
            let left=parseInt($(rang).offset().left);
            let top=parseInt($(rang).offset().top);
    
            if (Math.abs(positionTop - top) < 50  && Math.abs(positionLeft - left) < 50) {

                score = score + 5;
                let val="Score :"+ score;
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

    let bat_left=parseInt($('.bat').offset().left);
    let bat_top=parseInt($('.bat').offset().top);


    for(let i=0 ;i<array.length;i++){
        let object=array[i];

        let positionLeft=parseInt($(object).offset().left);
        let positionTop=parseInt($(object).offset().top);

        if ((Math.abs(positionTop - bat_top) < 55 ) && Math.abs(positionLeft - bat_left) < 30) {
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
    let top = $(".bat").css("top");
    let topNum = parseInt(top.substring(0, (top.length - 2)));

    let left=$(".bat").css("left");
    let leftNum = parseInt(left.substring(0, (left.length - 2)));
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

    },1000,'linear');

    let ar=  $('#content').children().first().children().last().children().first();
    batrangs.push(ar);

}

function centerOnBatMobile(){
    let Left=parseInt($('.bat').offset().left);
    let Top=parseInt($('.bat').offset().top);

    let offsets = $('.mobile').offset();
    let bat_mobile_width = parseInt($(".mobile").css("width"));
    let bat_mobile_height = parseInt($(".mobile").css("height"));

    let bat_mobile_left = offsets.left; 
    let get_onto_car_left = bat_mobile_left + 10;

   if (Top <= -5 && Left > get_onto_car_left) {
       $("#background").trigger('pause');
       $("#tada").trigger('play');

       $(".mobile").remove();
       $(".bat").css('visibility',"hidden");
        $(".mobile2").css('visibility',"visible");
       for(let i=0 ;i<array.length;i++){
           array[i].remove();
       }
       for(let i=0 ;i<batrangs.length;i++){
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
