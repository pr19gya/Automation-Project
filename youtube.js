const puppeteer= require("puppeteer");
let cTabs;
const link= "https://www.youtube.com/playlist?list=PLYT4vq6pQVSvWapTdSzFGErAua7uC9ul0";
(async function(){
    try {
        let browserOpen= await puppeteer.launch({
            headless : false,
            args:['--start-maximized'],
            defaultViewport : null
    })
    let browserInstance = await browserOpen;
    let allTabsArr= await browserInstance.pages()
    cTabs = allTabsArr[0];
    await cTabs.goto(link);
    await cTabs.waitForSelector(".style-scope.yt-dynamic-sizing-formatted-string.yt-sans-20.overflown");
    let name= await cTabs.evaluate(function(select){return document.querySelector(select).innerText} , ".style-scope.yt-dynamic-sizing-formatted-string.yt-sans-20.overflown");
    
    let allData= await cTabs.evaluate(getData , ".byline-item.style-scope.ytd-playlist-byline-renderer");
    console.log(name, allData.noOfVideos, allData.noOfViews);
    let totalVids= allData.noOfVideos.split(" ")[0];
    console.log(totalVids)

    let currVideos= await  getCVideoLength();
    console.log(currVideos);

    while(totalVids- currVideos >= 20){
        await scrollToBottom();
        currVideos=await getCVideoLength();


    }


    let finalList = await getStats();
    console.log(finalList);
    } catch (error) {
        console.log(error)
    }
})()

function getData(selector){
    let allElems = document.querySelectorAll(selector);
    let noOfVideos= allElems[0].innerText;
    let noOfViews= allElems[1].innerText;
    return {noOfVideos ,
             noOfViews}
}

async function getCVideoLength(){
    let length= await cTabs.evaluate(getLength, ".yt-simple-endpoint.style-scope.ytd-playlist-video-renderer");
    return length;
}

async function getStats(){
    let list= cTabs.evaluate(getNameAndDuration, ".style-scope.ytd-thumbnail-overlay-time-status-renderer");
    return list;
}

function getLength(durationTime){
    let durationElem= document.querySelectorAll(durationTime);
    return durationElem.length;
}

async function scrollToBottom(){
    await cTabs.evaluate(goToBottom);
    function goToBottom(){
        window.scrollBy(0, window.innerHeight);
    }
}

function getNameAndDuration(videoSelector, durationSelector){
    let videoElem= document.querySelectorAll(videoSelector);
    let durationElem= document.querySelectorAll(durationSelector);

    let currList=[];

    for(let i=0;i<durationElem.length; i++){
        let videoTitle= videoElem[i].innerText
        let duration = durationElem[i].innerText
        currList.push({videoTitle, duration});
    }

    return currList;
}