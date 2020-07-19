/**
 * all methods wrappered in a Promise
 * 使用回调函数+Promise，借助队列将sleepFirst事件置前，单使用Promise则无法支持多个sleepFirst事件。
 */
const log = console.log;
class LazyManClass {
    constructor(name) {
        this.name = name;
        this.task = [];
        log(`I am ${name}`);
        Promise.resolve().then(() => {
            this.do();
        });
    }

    do() {
        // aux head
        let head = Promise.resolve();
        while (this.task.length) {
            const fn = this.task.shift();
            // connect
            head = head.then(() => {
                return fn();
            });
        }
    }

    wait(sec) {
        return () =>
            new Promise((resolve) => {
                console.log(`wait ${sec} seconds`);
                setTimeout(() => {
                    resolve();
                }, sec * 1000);
            });
    }

    sleep(sec) {
        this.task.push(this.wait(sec));
        return this;
    }

    sleepFirst(sec) {
        // create a micro-task
        this.task.unshift(this.wait(sec));
        return this;
    }

    eat(food) {
        this.task.push(() => log(`I am eating ${food}`));
        return this;
    }
}

function LazyMan(name) {
    return new LazyManClass(name);
}

// test case
LazyMan("Tony").eat("junk food").sleep(5).sleepFirst(4).eat("dinner");
