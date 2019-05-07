(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Application {
    constructor(container) {
        this.container = document.querySelector(container);
        this.run();
    }
    run() {
        this.container.innerHTML = "Hello World";
    }
}
exports.Application = Application;
window.App = Application;
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0cy9hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0NBLE1BQWEsV0FBVztJQUlwQixZQUFZLFNBQWlCO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUQsR0FBRztRQUVDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQztJQUM3QyxDQUFDO0NBQ0o7QUFiRCxrQ0FhQztBQUlBLE1BQWMsQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy9BbGwgc3RhcnRzIGZyb20gYXBwXHJcbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvbiB7XHJcblxyXG4gICAgY29udGFpbmVyOiBFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lcik7XHJcbiAgICAgICAgdGhpcy5ydW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgLy9IZWxsbyBXb3JsZFxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9IFwiSGVsbG8gV29ybGRcIjtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vdXNlIGxldCBhcHAgPSBuZXcgQXBwKCkgdG8gYmVnaW5cclxuKHdpbmRvdyBhcyBhbnkpLkFwcCA9IEFwcGxpY2F0aW9uOyJdfQ==
