
window.onload = function(){
    var oBox = document.getElementById('l-banner');
    var aBtn = oBox.getElementsByTagName('li');
    var aDiv = oBox.getElementsByTagName('div');
    var aSco = oBox.getElementsByTagName('a');
    var num = 0;
    for(var i = 0;i<aBtn.length;i++){
        aBtn[i].index = i;
        aBtn[i].onmouseover = function(){
            num=this.index;
            public();
        }
    }


    function public(){
        for(var i = 0;i<aBtn.length;i++){
            aBtn[i].className='';
            aDiv[i].className='';

        }
        aBtn[num].className='active';
        aDiv[num].className='show';
    }

    aSco[0].onclick = function(){
        num--;
        if(num==-1){num=4;}
        public();
    }


    aSco[1].onclick = function(){
        num++;
        if(num == 5){num=0;}
        public();
    }
}