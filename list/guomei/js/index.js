/**
 * Created by ibm on 2018/6/28.
 */

window.onload = function ( ) {
    //----------------------1.遮罩弹框--------------------------
    var shade = document.getElementById("shade");
    var pop = document.getElementById("pop");
    setTimeout(function () {
        shade.style.display = "block";
        pop.style.display = "block";
        pop.style.left = document.documentElement.clientWidth/2 - pop.offsetWidth/2+"px";
        pop.style.top = document.documentElement.clientHeight/2 - pop.offsetHeight/2+"px";

        setTimeout(function () {
            shade.style.display = "none";
            pop.style.display = "none";
        },1500);

    },500);

    //---------------------- 2.关闭顶部广告----------------------
    var closeBut = document.getElementsByClassName("close-bg")[0];
    closeBut.onclick = function () {
        this.parentNode.parentNode.remove();
    }


    //---------------------------------3.head-search 搜索框------------------------------------------
    //1.搜索的框的默认值
    var sInput = document.getElementById("searchInput");
    var defaultLable = document.getElementsByClassName("input-default")[0];
    var arr = ["冰箱","空调","红米note5","电风扇","惠普游戏本4588元限量抢"];
    var defaultIndex = 0;
    //2.切换默认值
    setInterval(function () {
        defaultIndex++;
        if(defaultIndex==arr.length){defaultIndex = 0;}
        defaultLable.innerHTML = arr[defaultIndex];
    },3000);

    //3.默认值的显示和隐藏
    sInput.onclick = function () {
        defaultLable.style.display = "none";
    }
    sInput.onblur = function () {
        if(this.value == ""){
            defaultLable.style.display = "block";
        }
    }

    
    
    //-----------------------------------4.商品分类----------------------------------------
    //1.商品的对应的显示隐藏
    var goryLi = document.getElementById("lisnav").getElementsByTagName("li");
    var goryDiv = document.getElementById("lisBox").getElementsByTagName("div");
    for(var i = 0; i<goryLi.length;i++){
        goryLi[i].index = i;
        goryLi[i].onmouseover = function () {
            this.className = "active";
            console.log(goryDiv[this.index]);
            goryDiv[this.index].style.display = "block";
        }
        goryLi[i].onmouseout = function () {
            this.className = "";
            goryDiv[this.index].style.display = "none";
        }
    }

    //2.滚动
    var sideList = document.getElementById("sideList");
    var n = 0;
    var len = 3;
    setInterval(function () {
        if(n == 3){
            n = 1;
            sideList.style.top = "0px";
        }else {
            n++;
        }
        move(sideList,4,"top",-n*40);
    },3000)

    //3.banner
    //通过数据生成对应的li标签
    var bannerUl = document.getElementById("banner-list");
    var bannerFocus = document.getElementById("banner-focus");
    var gmBanner = document.getElementsByClassName("gome-banner")[0];
    var focusList = bannerFocus.getElementsByTagName("li");
    var bannerList = bannerUl.getElementsByTagName("li");
    var bannerChange = document.getElementsByClassName("banner-change")[0].getElementsByTagName("span");

   ajax("js/banner.txt",function (json) {
       var main_data = eval(json);
       var listStr = "";
       var focusStr = "";
       for(var i = 0;i<main_data.length;i++){
           listStr += "<li><a href='#'><img src='"+main_data[i][0].src+"' alt=''></a></li>";
           focusStr += "<li></li>";
       }
       bannerUl.innerHTML = listStr;
       bannerFocus.innerHTML = focusStr;
       focusList[0].className = "active";
       bannerList[0].className = "active";
       gmBanner.style.background = main_data[0][0].background;
       //左右切换
       var bannerIndex = 0;
       bannerChange[0].onclick = function () {
           bannerIndex--;
           if(bannerIndex < 0){bannerIndex=focusList.length-1}
           bChange(bannerIndex);
       }
       bannerChange[1].onclick = function () {
           bannerIndex++;
           if(bannerIndex == focusList.length){bannerIndex=0}
           bChange(bannerIndex);
       }
       function bChange(bannerIndex) {
           //换图片，方块样式，背景
           for(var i=0;i<focusList.length;i++){
               focusList[i].className = "";
               bannerList[i].className = "";
           }
           focusList[bannerIndex].className = "active";
           bannerList[bannerIndex].className = "active";
           gmBanner.style.background = main_data[bannerIndex][0].background;
       }
       //点击小方块切换
       for(var i = 0;i<focusList.length;i++){
           focusList[i].index = i;
           focusList[i].onmouseover = function () {
               bannerIndex = this.index;
               bChange(bannerIndex);
           }
       }
       //自动播放
       var timer = setInterval(bAuto,4000);
       function bAuto() {
           bannerIndex++;
           if(bannerIndex == focusList.length){bannerIndex=0}
           bChange(bannerIndex);
       }
       bannerUl.onmouseover = function () {
           clearInterval(timer);
       }
       bannerUl.onmouseout = function () {
           timer = setInterval(bAuto,4000);
       }
   });

    //banner右下服务块显示
    var serverLi = document.getElementsByClassName("banner-server")[0].getElementsByTagName("li");
    var serverXF = document.getElementsByClassName("server-xf")[0];
    var serverI = serverXF.getElementsByTagName("span")[0];
    var serverE = serverXF.getElementsByTagName("em")[0];
    var serverLo = serverXF.getElementsByTagName("li");
    serverE.onclick = function () {
        serverXF.style.display = "none";
        hcMove(serverXF,{"top":600});
    }
    var len = 3;
    for(var i=0;i<len;i++){
        serverLi[i].index = i;
        serverLi[i].onmouseover = function () {
            for(var j = 0;j<len;j++){
                serverLo[j].style.display = "none";
            }
            serverLo[this.index].style.display = "block";
            serverXF.style.display = "block";
            hcMove(serverXF,{"top":225});
            serverI.style.left =  this.offsetLeft+this.offsetWidth/2-7 +"px";
        }
    }


     //------------------------5.每日必抢-----------------------------------
    var dDate = document.getElementById("date").getElementsByTagName("em");
    autoDate();
    setInterval(autoDate,1000);
    function autoDate() {
        //倒计时
        var oldDate = new Date();
        var newDate = new Date(2018,7,24);
        var time = parseInt((newDate-oldDate)/1000);
        var h = parseInt(time%(24*60*60)/3600 );
        var m = parseInt(time%3600/60 );
        var s = parseInt(time%60);
        dDate[0].innerHTML = toTwo(h);
        dDate[1].innerHTML = toTwo(m);
        dDate[2].innerHTML = toTwo(s);
    }
    function  toTwo(t) {
        return t >= 10 ? t : "0"+t;
    }
    /*ajax("http://ajaxtuan.gome.com.cn/cheap/getIndexRushbuyItem",function (str) {
        console.log(str);
    });*/
    //2.通过请求的数据生成标签
    var dayRob = document.getElementsByClassName("day-rob-left")[0];
    var robBut = document.getElementsByClassName("list-but")[0];
    var robList = document.getElementById("rob-list");
    var listBut = robBut.getElementsByTagName("div");
    ajax("js/day.txt",function (json) {
        json = eval(json)[0];
        console.log(json);
        var listArr = json.data.indexRushItem;
        for(var i = 0;i<listArr.length;i++){
            if(i == 0 || i == 4){
                var listDiv = document.createElement("div");
                listDiv.className = "list";
                robList.appendChild(listDiv);
            }
            var listLi = document.createElement("div");
            listLi.className = "list-li li-"+i;

            //a标签
            var listA = document.createElement("a");
            listA.href = "#"; //listArr[i].goods_url
            listA.title = listArr[i].goods_name;

            //img标签
            var listImg = document.createElement("img");
            listImg.src = listArr[i].goods_img;
            listImg.alt = listArr[i].goods_name;
            listImg.width = "120";
            listImg.height = "120";
            listA.appendChild(listImg);
            //价格
            var listPrice = document.createElement("p");
            listPrice.className = "list-price";
            listPrice.innerHTML = listArr[i].goods_tg_price;
            var listPriceS = document.createElement("span");
            listPriceS.innerHTML = listArr[i].goods_price;
            listPrice.appendChild(listPriceS);
            listA.appendChild(listPrice);
            //标题
            var listName = document.createElement("p");
            listName.className = "list-name";
            listName.innerHTML = listArr[i].goods_name;
            listA.appendChild(listName);
            listLi.appendChild(listA);
            listDiv.appendChild(listLi);
        }


        //3.左右切换
        var listDiv = document.getElementsByClassName("list");
        for(var i = 1;i<listDiv.length;i++){
            listDiv[i].style.display = "none";
        }

        //4.移入显示按钮
        dayRob.onmouseover = function () {
            robBut.style.display = "block";
        }
        dayRob.onmouseout = function () {
            robBut.style.display = "none";
        }
        //5.左右切换
        var n = 0;
        listBut[0].onclick = listBut[1].onclick = function () {
            n = n == 0 ? 1 :0;
            for(var i = 0;i<listDiv.length;i++){
                listDiv[i].style.display = "none";
            }
            listDiv[n].style.display = "block";
            return false;
        }

    })



    /*-------------------------11.热门话题---------------------------------*/
    var hotSpan = document.getElementsByClassName("gm-hot")[0].getElementsByTagName("span");
    var hotTop = document.getElementsByClassName("gm-hot")[0].getElementsByClassName("hot-top");
    for(var i = 0;i<hotTop.length;i++){
        hotTop[i].index = i;
        hotTop[i].onmouseenter = function () {
            hotSpan[this.index].style.display = "block";
            var w = parseInt(getStyle( hotSpan[this.index],"width"));
            hotSpan[this.index].style.width = 0;
            console.log(w);
            hcMove(hotSpan[this.index],{"width":w});
        }

        hotTop[i].onmouseleave = function () {
            var index = this.index;
            var w = parseInt(getStyle( hotSpan[this.index],"width"));
            hcMove(hotSpan[index],{"width":0},function () {
                hotSpan[index].style.width = w+"px";
                hotSpan[index].style.display = "none";
            });
        }
    }


    /*---------------------------12.楼层------------------------------*/

    ajax("floor.txt",function (json) {
        var j = eval(json)[0];
        //获取所有楼层
        var gmFloor = document.getElementsByClassName("gm-floor");
        for(var i = 0;i<gmFloor.length;i++){
            floorChange(gmFloor[i],i);
        }
        //选项卡效果
        function floorChange(floor,index) {
            var floorMain = floor.getElementsByClassName("floor-main");
            var nav = floor.getElementsByClassName("floor-nav")[0].getElementsByTagName("a");
            var tabNext = floor.getElementsByClassName("floor-wrap")[0].getElementsByTagName("i")[0];
            var brandPage = floor.getElementsByClassName("phBrand-page")[0];
            var pageBut = brandPage.getElementsByTagName("em"); //轮播的左右按钮
            var picLi = floor.getElementsByClassName("carousel")[0].getElementsByTagName("li");//轮播图片
            var brandUl = floor.getElementsByClassName("phBrand")[0].getElementsByTagName("ul");//品牌列表
            var picSpan = floor.getElementsByClassName("floor-main-fl")[0].getElementsByTagName("span");//小方块
            var n = 0;
            var page = 0;
            var brand = 0;
            var floorArr  = j.floor;

            //1.获取数据给每个模块添加内容
            for(var i = 1;i<floorMain.length;i++){
                createFloor(floorMain[i],floorArr[index][i-1]);
            }
            //2.划过显示对应的模块
            for(var i = 0;i<nav.length;i++){
                nav[i].index = i;
                nav[i].onmouseover = function () {
                    for(var j = 0;j<nav.length;j++){
                        nav[j].className = "";
                        floorMain[j].style.display = "none";
                    }
                    this.className = "active";
                    floorMain[this.index].style.display = "block";
                    n = this.index;
                }
            }
            //3.点击按钮切换模块
            tabNext.onclick = function () {
                n++;
                if(n == nav.length){n=0}
                for(var j = 0;j<nav.length;j++){
                    nav[j].className = "";
                    floorMain[j].style.display = "none";
                }
                nav[n].className = "active";
                floorMain[n].style.display = "block";
            }
            function createFloor(floor,arr) {
                //添加ul标签
                var oUl = floor.getElementsByTagName("ul");
                floor.innerHTML = "<ul class='floor-main-list'></ul>";

                var str = "";

                for(var i = 0;i<arr.length;i++){
                    str += "<li><a href='#'><img src='"+arr[i].goods_img+"' alt=''><p class='p-name'>"+arr[i].goods_name+"</p><p class='p-price'>"+arr[i].goods_price+"</p></a></li>";
                }
                oUl[0].innerHTML = str;
            }
            //4.点击左右切换图片
            pageBut[1].onclick = function () {
                page++;
                brand++;
                if(page >= picLi.length){page = 0;}
                if(brand >= brandUl.length){brand=0;}
                picChange(page,brand);
            }
            pageBut[0].onclick = function () {
                page--;
                brand--;
                if(page < 0){page = picLi.length-1;}
                if(brand < 0){brand=brandUl.length-1;}
                picChange(page,brand);

            }
            //5.点击小方块切换图片
            for(var i = 0;i<picSpan.length;i++){
                picSpan[i].index = i;
                picSpan[i].onmouseover = function () {
                    for(var j = 0;j<picLi.length;j++){
                        picLi[j].style.display = "none";
                        picSpan[j].className = "";
                    }
                    picSpan[this.index].className = "hover";
                    picLi[this.index].style.display = "block";
                    picLi[this.index].style.animation = "show 1s";
                }
            }
            function picChange(page,brand){
                for(var i = 0;i<brandUl.length;i++){
                    brandUl[i].style.display = "none"
                }
                brandUl[brand].style.display = "block";
                brandUl[brand].style.animation = "show 1s";


                for(var i = 0;i<picLi.length;i++){
                    picLi[i].style.display = "none";
                    picSpan[i].className = "";
                }
                picSpan[page].className = "hover";
                picLi[page].style.display = "block";
                picLi[page].style.animation = "show 1s";
            }


            //5.自动图片轮播
            var timer = setInterval(picAuto,3000);
            function picAuto() {
                page++;
                brand++;

                if(page >= picLi.length){page = 0;}
                if(brand >= brandUl.length){brand=0;}
                picChange(page,brand);
            }
            floor.onmouseover = function () {
                clearInterval(timer);
            }
            floor.onmouseout = function () {
                timer =  setInterval(picAuto,3000);
            }

        }

    })



    /*-----------------------------13.楼层导航-------------------------*/
    var floorNav = document.getElementsByClassName("gm-floor-nav")[0];
    var gmFloor = document.getElementsByClassName("gm-floor");
    var navRef = floorNav.getElementsByTagName("a");
    var navTop = document.getElementsByClassName("gm-top")[0];
    var navBottom = document.getElementsByClassName("gm-bottom")[0];
    var floorWrap = document.getElementsByClassName("gm-fn-wrap")[0];
    var floorWrapTop = floorWrap.offsetTop;
    //1.设置导航条的位置
    floorNav.style.left = (document.documentElement.clientWidth-1200)/2-80 +"px";
    //2.滚动监听
    scrollAuto();
    function scrollAuto() {
        //添加滚动事件
        window.onscroll = function () {
            //1.设置导航的位置
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            // floorNav.style.top = document.documentElement.clientHeight/2-floorNav.offsetHeight/2 + scrollTop + "px";

            //2.显示楼层导航
            if(scrollTop >= floorWrapTop-document.documentElement.clientHeight+20 && scrollTop < floorWrapTop+floorWrap.clientHeight-400){
                floorNav.style.display = "block";
            }else {
                floorNav.style.display = "none";
            }

            var tag = 0;
            //3.监听滚动楼层
            for(var i = 0;i<gmFloor.length;i++){
                if(scrollTop >= gmFloor[i].offsetTop-30){
                    tag = i;
                }
            }
            for(var i = 0;i<navRef.length-2;i++){
                navRef[i].className = "";
            }
            navRef[tag].className = "active";
        }
    }
    window.onresize = function () {
        floorNav.style.left = (document.documentElement.clientWidth-1200)/2-80 +"px";
    }

    //3.点击切换楼层
    for(var i = 0;i<navRef.length-2;i++){
        navRef[i].index = i;
        navRef[i].onclick = function () {
            window.onscroll = null;
            for(var j = 0;j<navRef.length-2;j++){
                navRef[j].className = "";
            }
            this.className = "active";
            var t = document.getElementById(this.getAttribute("href").substring(1)).offsetTop;
            goScroll(t,function () {
                scrollAuto();
            });
            return false;

        }
    }
    function goScroll(target,fun){
        //保证当前元素只有一个定时器在运动，
        clearInterval(document.timer);
        document.timer = setInterval(function (){

            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            var speed = (target-scrollTop)/5;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if(scrollTop == target){
                clearInterval(document.timer);
                fun&&fun();
            }
            document.documentElement.scrollTop = document.body.scrollTop = scrollTop + speed;
        },30);
    }
    //4.顶部到底部的跳转
    navTop.onclick = function () {
        goScroll(0);
    }
    navBottom.onclick = function () {
        goScroll(document.body.clientHeight-document.documentElement.clientHeight);
    }

}







