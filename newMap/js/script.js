let arr = [1,2,3,4,5,6,7,8];

Array.prototype.newMap = function(callback){
    let element,index;
    let arrName = this;
    for(let i = 0; i <= arrName.length-1; i++){
        element = arr[i];
        index = i;
        callback(element,index,arrName);
    }
}
arr.newMap(function (a,b,c) {
    console.log(a,b,c);
})