const puppeteer=require("puppeteer");
let page;
let BrowerOpenPromise=puppeteer.launch({headless:false, slowMo:true, defaultViewport:null, args:["--start-maximized"]});
BrowerOpenPromise
    .then(function(browser){
        const pageArrPromise=browser.pages();
        return pageArrPromise;
    }).then(function(browserPages){
        page=browserPages[0];
        const gotoPromise = page.goto("https://www.google.com/");
        return gotoPromise;
    }).then(function(){
        //wait for element to appear on the page
        let elementWaitPromise=page.waitForSelector("#APjFqb" , {visible:true});
        return elementWaitPromise;
    })
    .then(function(){
        //type pepcoding
        let KeyboardPromise= page.type("#APjFqb","pepcoding");
        return KeyboardPromise;
    }).then(function(){
        //clicking on enter to search
        let EnterPress=page.keyboard.press("Enter");
        return EnterPress;
     }).then(function(){
        let elementWaitPromise=page.waitForSelector("h3.LC20lb.MBeuO.DKV0Md" , {visible:true});
        return elementWaitPromise;
     }).then(function(){
        let KeysWillSendPromise=page.click("h3.LC20lb.MBeuO.DKV0Md");
        return KeysWillSendPromise;
     }).catch(function(err){
        console.log(err);
    })

    