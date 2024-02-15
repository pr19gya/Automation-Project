function OrderCoffee(drink){
    return new Promise (function(resolve, reject){
        if(drink=="coffee"){
            resolve("Order Placed");
        }
        else{
            reject("Sorry, we only serve coffee");
        }
    })
}

function processCoffee(order){
    return new Promise(function(resolve){
        console.log("Coffee is being prepared");
        resolve(`Coffee served for the ${order}`);
    })
}

// OrderCoffee('tea').then(function(orderFromCustomer){
//     console.log("Request Received");
//     let orderIsProcessed= processCoffee(orderFromCustomer);
//     return orderIsProcessed;
// }).then(function(orderIsProcessed){
//     console.log(orderIsProcessed);
// }).then(function(err){
//     console.log(err);
// })

//async await

async function serveOrder(){
    try {
        const orderReceived= await OrderCoffee("tea");
    console.log(orderReceived);
    const orderProcessed= await processCoffee(orderReceived);
    console.log(orderProcessed);
    } catch (error) {
        console.log(error);
    }
    
}

serveOrder();