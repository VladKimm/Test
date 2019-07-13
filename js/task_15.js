var arr = [1,5,3,4,2,15];
var resultMin = 0;
var resultMax = 0

function sortFunc(a, b) {
    return a - b;     
}
console.log(arr);
arr.sort(sortFunc);
console.log(arr);

for(var i =0; i < arr.length; i++) {
    if(i !==0) resultMax += arr[i];
    if(i !== arr.length - 1) resultMin += arr[i];
}

console.log(arr);
console.log(resultMin);
console.log(resultMax);
