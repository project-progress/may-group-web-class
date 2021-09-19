const equall = document.getElementById('equall');
equall.onclick = function(){
    const x = document.getElementsByTagName('input')[0].value;
    const y = eval(x);
    document.getElementsByTagName('input')[0].value = y;
}