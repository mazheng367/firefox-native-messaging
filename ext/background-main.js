browser.browserAction.onClicked.addListener((tab) => {
    browser.tabs.create({url: "https://www.36mh.com/"});
});

const connect = browser.runtime.connectNative("downloader.manga");

connect.onDisconnect.addListener(function (e) {
    if (e.error) {
        console.log(e.error.message);
    }
    console.log('Disconnected')
});

connect.onMessage.addListener((data) => console.log(data));

browser.runtime.onMessage.addListener(() => connect.postMessage({now: new Date()}));