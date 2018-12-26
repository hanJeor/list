/**
 * Created by ibm on 2018/6/26.
 */
window.onload = function () {
    var cart = document.getElementsByClassName("cart")[0];
    var shop = document.getElementById("shopping");
    getStyle(shop,"height");
    cart.onmousemove = function () {
        move(shop,22,100,"height");
        cart.style.background = "white"
    };
    shop.onmousemove = function () {
        move(shop,22,100,"height");
        cart.style.background = "white"
    };
    cart.onmouseout = function () {
        move(shop,22,0,"height",function (){
            cart.style.background = "#424242";
        });
    };
    shop.onmouseout = function () {
        move(shop,22,0,"height",function (){
            cart.style.background = "#424242";
        });
    };
    //购物车结束




    //倒计时开始
    var dT = document.getElementById("downTime");
    var box = dT.getElementsByTagName("div");
    date();
    setInterval(date,1000);
    function date() {
        var currentDate = new Date(); //当前时间
        var futureDate = new Date("5,5,2018"); //把年月日的值赋给未来时间
        var time = parseInt((futureDate - currentDate)/1000);//毫秒转为整数秒
        var H = parseInt((time%86400)/3600);//小时
        var M = parseInt(time%3600/60);//分钟
        var S = time%60;//秒
        box[0].innerHTML=H;
        box[1].innerHTML=M;
        box[2].innerHTML=S;
    }




//选项卡开始

    var a = document.getElementById("headerTop").getElementsByTagName("a");
    var Xul = document.getElementById("jia").getElementsByTagName("ul");
        for(var i=0;i<a.length;i++){
            a[i].index = i;
            a[i].onmousemove = function () {
                for(var n=0;n<Xul.length;n++){
                    Xul[n].style.display="none";
                }
                Xul[this.index].style.display = "block";
            }
        }



    //迅播开始
    var div = document.getElementById("xunBut").getElementsByTagName("div");
    var xunUl = document.getElementById("xunUl");

        var n = 0;
        div[0].onclick = function () {
            //for (var i = 1; i <= 3; i++) {
            //    xunUl.style.left = (-1240)+"px";
            //}
            n++;
            if(n>3){
               n=3;
            }
            xunUl.style.left = (-1240)*n+"px";
        };

        div[1].onclick = function () {
            n--;
            if(n<0){
                n=0;
            }
            xunUl.style.left = (-1240)*n+"px"
        }
    };


