/*jshint esversion:6*/
const div = document.createElement("div");
div.style.cssText += "position:fixed;right:0;top:10px;border-radius:50%;width:50px;height:50px;background-color:red";
div.addEventListener("click", async () => {
    debugger;
    (document.querySelector("#keywords") as HTMLInputElement).value = "学习";
    (document.querySelector("#btnSearch") as HTMLButtonElement).click();

    const data = await new Promise((resolve) => setTimeout(() => resolve(0), 1000)) ?? {};

    console.log(data);
});
document.body.appendChild(div);
