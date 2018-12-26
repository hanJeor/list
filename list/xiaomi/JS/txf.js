/**
 * Created by Administrator on 2018/4/17.
 */
function getStyle(obj,attr){//元素，获取的样式
    /*if(obj.currentStyle){
     return obj.currentStyle[attr];
     }else { //undefined  标准
     return getComputedStyle(obj)[attr];
     }*/
    return  obj.currentStyle ?  obj.currentStyle[attr] :  getComputedStyle(obj)[attr];
}

//声明一个函数，将数组进行从大到小排序，
function paixu(array){
    //拿出来其中一个，和后面所有的进行比较
    for(var i = 0;i<array.length;i++){
        //array[0] 和后面所有的进行比较
        for(var j = i+1;j<array.length;j++){
            if(array[i] > array[j]){
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }

    //从大打小
    return array;
}




var timer = null;
//移动的函数
// //可变的值，1.步长step  2.目标值target  3.运动的元素
function move(obj,step,target,attr,fun){
    //       当前值，，目标值
    //右：    0          500
    //左      500         0
    step =  parseFloat(getStyle(obj,attr)) < target ? step :-step;
    //1.清除定时器    obj.timer
    clearInterval(obj.timer);
    obj.timer = setInterval(function (){
        //往前 往后 在当前left的基础上
        var left = parseFloat(getStyle(obj,attr));
        left = left + step;
        if(left >= target && step > 0 || left <= target && step < 0){ //left > 500 && 往右走
            left = target;
            clearInterval(obj.timer);
            //一个动作做完以后执行的函数
            //传了就调用，函数名代表的就是函数，如果有这个函数表示为真，如果没有这个函数--undefined
            /* if(fun){
             fun();
             }*/
            //&& 两个条件都为真才为真，如果第一个条件为假，就不会再去判断第二个条件
            fun&&fun();
        }
        obj.style[attr] = left +"px";
    },30);
}

//兼容标准，IE解析换行,获取父元素中的子节点
function getChild(obj,node){
    switch (node){
        case "first":
            if(obj.firstElementChild){
                return obj.firstElementChild;
            }else{
                return obj.firstChild;
            }
            break;
        case "last":
            if(obj.lastElementChild){
                return obj.lastElementChild;
            }else{
                return obj.lastChild;
            }
            break;
        case  "next":
            if(obj.nextElementSibling){
                return obj.nextElementSibling;
            }else{
                return obj.nextSibling;
            }
            break;
        case  "previous":
            if(obj.previousElementSibling){
                return obj.previousElementSibling;
            }else{
                return obj.previousSibling;
            }
            break;
    }
}


//与insertBefore相反
function getAfter(parsent,locate,attr,content){
    var nextLi=getChild(locate,"next");
    var addLi=document.createElement(attr);
    addLi.innerHTML=content;
    parsent.insertBefore(addLi,nextLi);
    if(locate==parsent.lastChild){
        parsent.lastChild(addLi);
    }
}
//attr,content 的实参要用字符串引起来。
// 父元素，子元素，加入的标签，加入的文本内容

