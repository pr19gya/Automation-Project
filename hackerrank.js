const puppeteer=require('puppeteer');
const loginLink="https://www.hackerrank.com/auth/login";
const email="210108044@hbtu.ac.in";
const password="484790";
const code=require("./code.js");

let page;


(async function(){
    try {
        let browserOpen= await puppeteer.launch({
                headless : false,
                args : ['--start-maximized'],
                defaultViewport : null
             }) 
        let newTab = await browserOpen.newPage();
        await newTab.goto(loginLink);
        await newTab.type("input[type='text']", email, {delay:50});
        await newTab.type("input[type='password']", password, {delay:50});
        await newTab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled", {delay : 50});
        await waitAndClick(".topic-card a[data-attr1 = 'algorithms']" , newTab);
        await waitAndClick(".ui-content.has-icon.align-icon-right" , newTab);
        await waitAndClick(".monaco-editor.no-user-select.showUnused.showDeprecated.vs", newTab);
       
        await waitAndClick("input[type='checkbox']" , newTab);
        await newTab.type(".input.text-area.custominput.auto-width", code.answer[0] , {delay: 20});
        await newTab.keyboard.down("Control");
        await newTab.keyboard.press("A" , {delay:100});
        await newTab.keyboard.press("X");
        await newTab.keyboard.up("Control");
        await waitAndClick(".monaco-editor.no-user-select.showUnused.showDeprecated.vs" , newTab);
        await newTab.keyboard.down("Control");
        await newTab.keyboard.press("A", {delay: 100});
        await newTab.keyboard.press("V");
        await newTab.keyboard.up("Control");
        await waitAndClick(".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled", newTab);
    } catch (error) {
        console.log(error);
    }
})()


// let browserOpen=puppeteer.launch({
//     headless : false,
//     args : ['--start-maximized'],
//     defaultViewport : null
// }).then(function (browserObj){
//     let browserOpenPromise=browserObj.newPage();
//     return browserOpenPromise;
// }).then(function(newTab){
//     page=newTab;
//     let hackerrankOpenPromise=newTab.goto(loginLink);
//     return hackerrankOpenPromise;
// }).then(function(){
//     let emailEnterPromise=page.type("input[type='text']", email, {delay:50});
//     return emailEnterPromise;
// }).then(function(){
//     let passEnterPromise=page.type("input[type='password']", password, {delay:50});
//     return passEnterPromise;
// }).then(function(){
//     let logInclickpromise=page.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled", {delay : 50});
//     return logInclickpromise;
// }).then(function(){
//     let clickOnAlgo=waitAndClick(".topic-card a[data-attr1 = 'algorithms']" , page);
//     return clickOnAlgo;
// }).then(function(){
//     let clickOnQues= waitAndClick(".ui-content.has-icon.align-icon-right" , page);
//     return clickOnQues;
// }).then(function(){
//     let quesWillBeSolved= waitAndClick(".monaco-editor.no-user-select.showUnused.showDeprecated.vs", page);
//     return quesWillBeSolved;
// }).then(function(){
//     let CustomInput=waitAndClick("input[type='checkbox']" , page);
//     return CustomInput;
// }).then(function(){
//     let ClickCustomArea=waitAndClick(".input.text-area.custominput.auto-width" , page);
//     return ClickCustomArea;
// }).then(function(){
//     let typeCode=page.type(".input.text-area.custominput.auto-width", code.answer[0] , {delay: 20});
//     return typeCode;
// }).then(function(){
//     let ctrlIsPressed= page.keyboard.down("Control");
//     return ctrlIsPressed;
// }).then(function(){
//     let aIsPressed= page.keyboard.press("A" , {delay:100});
//     return aIsPressed;
// }).then(function(){
//     let XIsPressed= page.keyboard.press("X");
//     return XIsPressed;
// }).then(function(){
//     let ctrlIsUnpressed= page.keyboard.up("Control");
//     return ctrlIsUnpressed;
// }).then(function(){
//     let MainEditorSelect=waitAndClick(".monaco-editor.no-user-select.showUnused.showDeprecated.vs" , page);
//     return MainEditorSelect;
// }).then(function(){
//     let Pressctrl= page.keyboard.down("Control");
//     return Pressctrl;
// }).then(function(){
//     let PressAll=page.keyboard.press("A", {delay: 100});
//     return PressAll;
// }).then(function(){
//     let PasteCode= page.keyboard.press("V");
//     return PasteCode;
// }).then(function(){
//     let Unpressctrl= page.keyboard.up("Control");
//     return Unpressctrl;
// }).then(function(){
//     let Submit=waitAndClick(".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled", page);
//     return Submit;
// })

async function waitAndClick(selector,cPage){
    await cPage.waitForSelector(selector);
    let selectorClicked=  cPage.click(selector);
    return selectorClicked;
}


