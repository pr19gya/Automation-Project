//custom map
function myPolyFillMap(arr, cb){
    let newArr= [];
    for(let i=0; i<arr.length; i++){
        newArr.push(cb(arr[i]));
    }
    return newArr;
}

function square(x){
    return x*x;
}
let MyArr= [1,2,3,4,5];
console.log(myPolyFillMap(MyArr, square));