document.getElementById("one").onclick = function (){writeFun(this.value)};
document.getElementById("two").onclick = function (){writeFun(this.value)};
document.getElementById("three").onclick = function (){writeFun(this.value)};
document.getElementById("four").onclick = function (){writeFun(this.value)};
document.getElementById("five").onclick = function (){writeFun(this.value)};
document.getElementById("six").onclick = function (){writeFun(this.value)};
document.getElementById("seven").onclick = function (){writeFun(this.value)};
document.getElementById("eight").onclick = function (){writeFun(this.value)};
document.getElementById("nine").onclick = function (){writeFun(this.value)};
document.getElementById("zero").onclick = function (){writeFun(this.value)};
document.getElementById("point").onclick = function (){writeFun(this.value)};
document.getElementById("plus").onclick = function (){writeFun(this.value)};
document.getElementById("minus").onclick = function (){writeFun(this.value)};
document.getElementById("multiple").onclick = function (){writeFun(this.value)};
document.getElementById("divide").onclick = function (){writeFun(this.value)};
document.getElementById("percent").onclick = function (){Parcent(document.getElementsByTagName("input")[0].value)};
document.getElementById("equals").onclick = function (){Equals(document.getElementsByTagName("input")[0].value)};
document.getElementById("back").onclick = function (){Back(document.getElementsByTagName("input")[0].value)};
document.getElementById("root").onclick = function (){RootNum(document.getElementsByTagName("input")[0].value)};
document.getElementById("clean").onclick = function (){Clean()};
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
    x = eval(x);
    document.getElementsByTagName("input")[0].value = x;
}