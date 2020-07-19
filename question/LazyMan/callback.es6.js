const log = console.log;

/**
 * Maintain a callback queue. Each task in queue calls next.
 * 维护一个待执行的回调函数队列， 队列中的每一个函数的函数体中都调用执行下一个事件的动作。
 * 在构造函数中使用setTimeout设置macrotask，调用第一个执行事件的动作来作为第一动力。
 */
class LazyManClass {
    constructor(name) {
        this.tasks = [];
        this.name = name;
        log(`Hi I am ${name}`);
        // create a macrotask immediately which executes after the main program code
        setTimeout(() => {
            this.next();
        });
    }

    next() {
        if (this.tasks.length) {
            const callback = this.tasks.shift();
            callback();
        }
    }

    eat(thing) {
        const fn = () => {
            log(`I am eating ${thing}`);
            this.next();
        };
        this.tasks.push(fn);
        return this;
    }

    sleep(sec) {
        const fn = () => {
            log(`wait ${sec} seconds`);
            setTimeout(() => {
                // wait until time up
                this.next();
            }, sec * 1000);
        };
        this.tasks.push(fn);
        return this;
    }

    sleepFirst(sec) {
        const fn = () => {
            log(`wait ${sec} seconds first`);
            setTimeout(() => {
                // wait until time up
                this.next();
            }, sec * 1000);
        };
        this.tasks.unshift(fn);
        return this;
    }
}
function LazyMan(name) {
    return new LazyManClass(name);
}

// a simple test use case
LazyMan("Tony")
    .eat("lunch")
    .eat("dinner")
    .sleepFirst(4)
    .sleep(5)
    .eat("junk food");
