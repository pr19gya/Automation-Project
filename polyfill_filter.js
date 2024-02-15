//custom filter


let fArr=[2,4,6,3,7,8,1,9];

function MyPolyfillFilter(fArr){
    let newArr=[];
    
    for(let i=0;i<fArr.length;i++){
        if(fArr[i]%2==0){
            newArr.push(fArr[i]);
            
        }
    }
    return newArr;
}

console.log(MyPolyfillFilter(fArr))