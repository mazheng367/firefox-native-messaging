browser.browserAction.onClicked.addListener((tab) => {
    debugger;
    browser.tabs.create({url: "https://www.36mh.com/"});
});

const connect = browser.runtime.connectNative("downloadPic");

connect.postMessage({"aa": "1"});

connect.onMessage.addListener((data) => console.log(data));