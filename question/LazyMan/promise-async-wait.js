const log = console.log;
class LazyManClass {
    constructor(name) {
        this.name = name;
        this.task = [];
        log(`I am ${name}`);
        setTimeout(() => {
            this.do();
        });
    }

    wait(sec) {
        return async () =>
            await new Promise((resolve) => {
                log(`wait ${sec} seconds`);
                setTimeout(() => {
                    resolve();
                }, sec * 1000);
            });
    }

    async do() {
        while (this.task.length) {
            const callback = this.task.shift();
            await callback();
        }
    }

    sleep(sec) {
        this.task.push(this.wait(sec));
        return this;
    }

    sleepFirst(sec) {
        this.task.unshift(this.wait(sec));
        return this;
    }

    eat(food) {
        this.task.push(() => {
            log(`I am eating ${food}`);
        });
        return this;
    }
}

function LazyMan(name) {
    return new LazyManClass(name);
}

// test case
LazyMan("Tony")
    .eat("junk food")
    .sleep(5)
    .sleepFirst(4)
    .eat("dinner")
    .sleepFirst(6);
