export function createDom(html: string): Element[] {
    const elems: Array<Element> = [];
    const wrapper = document.createElement("div");
    if (html && html.trim()) {
        wrapper.innerHTML = html;
        if (wrapper.childElementCount) {
            Array.from(wrapper.childNodes).forEach(node => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    elems.push(node as Element);
                }
            })
        }
    }
    return elems;
}


export function createStyle(cssText: string) {
    const style = document.createElement("style");
    style.innerHTML = cssText;
    document.head.appendChild(style);
}