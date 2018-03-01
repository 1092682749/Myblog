var imgArr = document.querySelectorAll(".lunboIn img");
console.log(imgArr);
var boxIn = document.getElementsByClassName('lunboIn')[0];
console.log(boxIn);
var substitute = document.getElementsByClassName('substitute')[0];
console.log(substitute);
var lunboLiArr = document.querySelectorAll('.lunboUl li');
console.log(lunboLiArr);
var lunboOut = document.getElementsByClassName('lunboOut')[0];
var wordDescribe = document.getElementById('wordDescribe');
var str;
var index = 0;
setLiOnclick();
wordDescribe.innerHTML=imgArr[0].getAttribute("title");
var timer=setInterval(autoMove,3000);
lunboOut.onmouseenter=function () {
    clearInterval(timer);
}
lunboOut.onmouseleave=function () {
    timer=setInterval(autoMove,3000);
}
function setLiOnclick() {
    for(var i=0;i<lunboLiArr.length;i++)
    {

        lunboLiArr[i].num=i;
        lunboLiArr[i].onclick=function () {
            index=this.num;
            console.log(this.num);
            // index--;
            // clearInterval(timer);
            changeLiColor();
            move();
        }
    }
}
function autoMove(){
    index++;
    move();
    changeLiColor();
}
// console.log(1);
function move(){
    if(index >= 5)
    {
        substitute.style.left=0 +"px";
        index=0;
        boxIn.style.left = -index * 440 + "px";
        str=imgArr[index].getAttribute('title');
        wordDescribe.innerHTML=str;
    }else {
        substitute.style.left=-440 + "px";
        boxIn.style.left = -index * 440 + "px";
        console.log(1);
        str=imgArr[index].getAttribute('title');
        console.log(str);
        wordDescribe.innerHTML=str;
    }
    changeLiColor();
}


function changeLiColor() {
    setLiColor();
    if(index>=4)
    {
        lunboLiArr[0].setAttribute("style","width:20px;height:20px");
        lunboLiArr[0].style.backgroundImage='url(img/chijing.png)';
    }else{
        lunboLiArr[index].setAttribute("style","width:20px;height:20px");
        lunboLiArr[index].style.backgroundImage='url(img/chijing.png)';
    }

}

setLiColor();
lunboLiArr[0].setAttribute("style","width:20px;height:20px");
lunboLiArr[0].style.backgroundImage='url(img/chijing.png)';
function setLiColor() {
    for(var i=0;i<lunboLiArr.length;i++)
    {
        lunboLiArr[i].setAttribute("style","wdith:14px;height:14px");
        lunboLiArr[i].style.backgroundImage='url(img/dian.png)';
    }
}
