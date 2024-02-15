//custom reduce 

let rArr=[1,2,4,3,5];

function MyPolyfillReduce(arr, cb){
    let a;
    
        a=cb(arr);
    
    return a;
}

function sum(rArr){
    let Sum=0;
    for(let i=0;i<rArr.length;i++){
         Sum+= rArr[i];
    }
    return Sum;
}

console.log(MyPolyfillReduce(rArr, sum));