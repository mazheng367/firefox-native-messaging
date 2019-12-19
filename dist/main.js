/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_domHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/domHelper */ "./src/utils/domHelper.ts");
/*jshint esversion:9*/

Object(_utils_domHelper__WEBPACK_IMPORTED_MODULE_0__["createStyle"])(__webpack_require__(/*! ./template/mainstyle.css */ "./src/template/mainstyle.css"));
const maskTpl = __webpack_require__(/*! ./template/mask.html */ "./src/template/mask.html");
const buttonTpl = __webpack_require__(/*! ./template/button.html */ "./src/template/button.html");
const elems = Object(_utils_domHelper__WEBPACK_IMPORTED_MODULE_0__["createDom"])([maskTpl, buttonTpl].join(""));
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
    constructor(name) {
        this.steps = [];
        console.log(`hello ${name}`);
        setTimeout(() => this.step());
    }
    eat(food) {
        this.steps.push(() => {
            console.log(`eat ${food}`);
            this.step();
        });
        return this;
    }
    sleep(time) {
        this.steps.push(() => {
            console.log(`sleep ${time}s`);
            setTimeout(() => {
                console.log("weak");
                this.step();
            }, time * 1000);
        });
        return this;
    }
    step() {
        var _a;
        (_a = this.steps.shift()) === null || _a === void 0 ? void 0 : _a();
    }
}
new LazyMan("Maz").eat("apple").sleep(5).eat("orange");


/***/ }),

/***/ "./src/template/button.html":
/*!**********************************!*\
  !*** ./src/template/button.html ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"inject-manga-button\"></div>";

/***/ }),

/***/ "./src/template/mainstyle.css":
/*!************************************!*\
  !*** ./src/template/mainstyle.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inject-manga-mask {\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: black;\r\n    opacity: .8;\r\n    left: 0;\r\n    top: 0;\r\n    z-index: 99999;    \r\n}\r\n\r\n.inject-manga-button {\r\n    position: fixed;\r\n    right: 0;\r\n    top: 10px;\r\n    border-radius: 50%;\r\n    width: 50px;\r\n    height: 50px;\r\n    background-color: red;\r\n    cursor: pointer;\r\n}\r\n\r\n.inject-elem-hidden{\r\n        display: none;\r\n}";

/***/ }),

/***/ "./src/template/mask.html":
/*!********************************!*\
  !*** ./src/template/mask.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"inject-manga-mask inject-elem-hidden\">\r\n    hello world\r\n</div>";

/***/ }),

/***/ "./src/utils/domHelper.ts":
/*!********************************!*\
  !*** ./src/utils/domHelper.ts ***!
  \********************************/
/*! exports provided: createDom, createStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDom", function() { return createDom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStyle", function() { return createStyle; });
function createDom(html) {
    const elems = [];
    const wrapper = document.createElement("div");
    if (html && html.trim()) {
        wrapper.innerHTML = html;
        if (wrapper.childElementCount) {
            Array.from(wrapper.childNodes).forEach(node => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    elems.push(node);
                }
            });
        }
    }
    return elems;
}
function createStyle(cssText) {
    const style = document.createElement("style");
    style.innerHTML = cssText;
    document.head.appendChild(style);
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGUvYnV0dG9uLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlL21haW5zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlL21hc2suaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZG9tSGVscGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4udHNcIik7XG4iLCIvKmpzaGludCBlc3ZlcnNpb246OSovXHJcblxyXG5pbXBvcnQgeyBjcmVhdGVEb20sIGNyZWF0ZVN0eWxlIH0gZnJvbSAnLi91dGlscy9kb21IZWxwZXInO1xyXG5cclxuY3JlYXRlU3R5bGUocmVxdWlyZShcIi4vdGVtcGxhdGUvbWFpbnN0eWxlLmNzc1wiKSk7XHJcblxyXG5jb25zdCBtYXNrVHBsID0gcmVxdWlyZShcIi4vdGVtcGxhdGUvbWFzay5odG1sXCIpO1xyXG5jb25zdCBidXR0b25UcGwgPSByZXF1aXJlKFwiLi90ZW1wbGF0ZS9idXR0b24uaHRtbFwiKTtcclxuXHJcbmNvbnN0IGVsZW1zID0gY3JlYXRlRG9tKFttYXNrVHBsLCBidXR0b25UcGxdLmpvaW4oXCJcIikpO1xyXG5cclxuZWxlbXNbMV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGNvbnN0IG1hc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluamVjdC1tYW5nYS1tYXNrXCIpO1xyXG4gICAgbWFzay5jbGFzc0xpc3QudG9nZ2xlKFwiaW5qZWN0LWVsZW0taGlkZGVuXCIpO1xyXG59KTtcclxuXHJcbmVsZW1zLmZvckVhY2gobm9kZSA9PiBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5vZGUpKTtcclxuXHJcbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYnRuKTtcclxuXHJcbi8vIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xyXG4vLyAgICAgZGVidWdnZXI7XHJcbi8vICAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNrZXl3b3Jkc1wiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9IFwi5a2m5LmgXCI7XHJcbi8vICAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG5TZWFyY2hcIikgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmNsaWNrKCk7XHJcblxyXG4vLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoMCksIDEwMDApKSA/PyB7fTtcclxuXHJcbi8vICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuLy8gfSk7XHJcbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcblxyXG5jbGFzcyBMYXp5TWFuIHtcclxuICAgIHByaXZhdGUgc3RlcHM6IEFycmF5PCgpID0+IHZvaWQ+ID0gW107XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgaGVsbG8gJHtuYW1lfWApO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zdGVwKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGVhdChmb29kOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnN0ZXBzLnB1c2goKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgZWF0ICR7Zm9vZH1gKTtcclxuICAgICAgICAgICAgdGhpcy5zdGVwKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2xlZXAodGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zdGVwcy5wdXNoKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYHNsZWVwICR7dGltZX1zYCk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3ZWFrXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGVwKCk7XHJcbiAgICAgICAgICAgIH0sIHRpbWUgKiAxMDAwKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGVwKCkge1xyXG4gICAgICAgIHRoaXMuc3RlcHMuc2hpZnQoKT8uKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm5ldyBMYXp5TWFuKFwiTWF6XCIpLmVhdChcImFwcGxlXCIpLnNsZWVwKDUpLmVhdChcIm9yYW5nZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiaW5qZWN0LW1hbmdhLWJ1dHRvblxcXCI+PC9kaXY+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi5pbmplY3QtbWFuZ2EtbWFzayB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIG9wYWNpdHk6IC44O1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHotaW5kZXg6IDk5OTk5OyAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmluamVjdC1tYW5nYS1idXR0b24ge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICB0b3A6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pbmplY3QtZWxlbS1oaWRkZW57XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiaW5qZWN0LW1hbmdhLW1hc2sgaW5qZWN0LWVsZW0taGlkZGVuXFxcIj5cXHJcXG4gICAgaGVsbG8gd29ybGRcXHJcXG48L2Rpdj5cIjsiLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlRG9tKGh0bWw6IHN0cmluZyk6IEVsZW1lbnRbXSB7XHJcbiAgICBjb25zdCBlbGVtczogQXJyYXk8RWxlbWVudD4gPSBbXTtcclxuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaWYgKGh0bWwgJiYgaHRtbC50cmltKCkpIHtcclxuICAgICAgICB3cmFwcGVyLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICAgICAgaWYgKHdyYXBwZXIuY2hpbGRFbGVtZW50Q291bnQpIHtcclxuICAgICAgICAgICAgQXJyYXkuZnJvbSh3cmFwcGVyLmNoaWxkTm9kZXMpLmZvckVhY2gobm9kZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtcy5wdXNoKG5vZGUgYXMgRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsZW1zO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0eWxlKGNzc1RleHQ6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcbiAgICBzdHlsZS5pbm5lckhUTUwgPSBjc3NUZXh0O1xyXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XHJcbn0iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7QUNoRUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=