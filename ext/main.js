/*jshint esversion:6*/
const div = document.createElement("div");
div.style.cssText += "position:fixed;right:0;top:10px;border-radius:50%;width:50px;height:50px;background-color:red";
div.addEventListener("click", () => {
    browser.runtime.sendMessage("1");
});
document.body.appendChild(div);
