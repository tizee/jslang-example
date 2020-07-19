const log = console.log;
class LazyManClass {
    constructor(name) {
        this.task = [];
        this.name = name;
        this.do = this.do.bind(this);
        log(`I am ${name}`);
        setTimeout(async () => {
            const jobs = this.do();
            for (const job of jobs()) {
                await job();
            }
        });
    }

    do() {
        const that = this;
        return function* () {
            while (that.task.length) {
                yield that.task.shift();
            }
        };
    }

    wait(sec) {
        return () =>
            new Promise((resolve) => {
                log(`wait ${sec} seconds`);
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

LazyMan("Tony")
    .eat("lunch")
    .eat("dinner")
    .sleepFirst(4)
    .sleep(5)
    .eat("junk food");
