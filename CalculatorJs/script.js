document.getElementById("percent").onclick = function (){Parcent(document.getElementsByTagName("input")[0].value)};
document.getElementById("back").onclick = function (){Back(document.getElementsByTagName("input")[0].value)};
document.getElementById("root").onclick = function (){RootNum(document.getElementsByTagName("input")[0].value)};
document.getElementById("clean").onclick = function (){Clean()};
document.getElementById("equals").onclick = function (){Equals(document.getElementsByTagName("input")[0].value)};
let num = document.getElementsByClassName("num");
for(let i = 0; i < num.length; i++){
    num[i].onclick = function (){writeFun(this.value)};
}
function writeFun(x){
    document.getElementsByTagName("input")[0].value+=x;
}
function RootNum(x){
    document.getElementsByTagName("input")[0].value = Math.sqrt(x);
}
function Parcent(x){
    document.getElementsByTagName("input")[0].value = x/100;
}
function Clean(){
    document.getElementsByTagName("input")[0].value = " ";
}
function Back(x){
    document.getElementsByTagName("input")[0].value = x.substring(0,x.length - 1);
}
function Equals(x){
    function sum(y) {
        document.getElementsByTagName("input")[0].value =  new Function('return ' + y)();
    }
    sum(x);
}