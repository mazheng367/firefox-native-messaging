/*jshint esversion:9*/
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