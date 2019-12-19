/*jshint esversion:9*/

import { createDom, createStyle } from './utils/domHelper';

createStyle(require("./template/mainstyle.css"));

const maskTpl = require("./template/mask.html");
const buttonTpl = require("./template/button.html");

const elems = createDom([maskTpl, buttonTpl].join(""));

elems[1].addEventListener("click", () => {
    const mask = document.querySelector(".inject-manga-mask");
    mask.classList.toggle("inject-elem-hidden");
});

elems.forEach(node => document.body.appendChild(node));

// document.body.appendChild(btn);

// div.addEventListener("click", async () => {
//     debugger;
//     (document.querySelector("#keywords") as HTMLInputElement).value = "学习";
//     (document.querySelector("#btnSearch") as HTMLButtonElement).click();

//     const data = await new Promise((resolve) => setTimeout(() => resolve(0), 1000)) ?? {};

//     console.log(data);
// });
// document.body.appendChild(div);


class LazyMan {
    private steps: Array<() => void> = [];
    constructor(name: string) {
        console.log(`hello ${name}`);
        setTimeout(() => this.step());
    }

    eat(food: string) {
        this.steps.push(() => {
            console.log(`eat ${food}`);
            this.step();
        });
        return this;
    }

    sleep(time: number) {
        this.steps.push(() => {
            console.log(`sleep ${time}s`);
            setTimeout(() => {
                console.log("weak");
                this.step();
            }, time * 1000);
        });

        return this;
    }

    private step() {
        this.steps.shift()?.();
    }
}

new LazyMan("Maz").eat("apple").sleep(5).eat("orange");