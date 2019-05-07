//All starts from app
export class Application {

    container: Element;

    constructor(container: string) {
        this.container = document.querySelector(container);
        this.run();
    }

    run() {
        //Hello World
        this.container.innerHTML = "Hello World";
    }
}


//use let app = new App() to begin
(window as any).App = Application;