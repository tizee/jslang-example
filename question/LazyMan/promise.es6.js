/**
 * all methods wrappered in a Promise
 */
const log = console.log;
class LazyManClass {
    constructor(name) {
        this.name = name;
        this.first = -1;
        log(`I am ${name}`);
        this.next = Promise.resolve().then(() => {
            if (this.first >= 0) {
                return new Promise((resolve) => {
                    log(`sleep ${this.first} seconds first`);
                    setTimeout(() => {
                        resolve();
                    }, this.first * 1000);
                });
            }
        });
    }

    sleep(sec) {
        this.next = this.next.then(() => {
            return new Promise((resolve) => {
                log(`wait for ${sec} seconds`);
                setTimeout(() => {
                    resolve();
                }, sec * 1000);
            });
        });
        return this;
    }

    sleepFirst(sec) {
        // create a micro-task
        this.first = sec;
        return this;
    }

    eat(food) {
        this.next = this.next.then(() => {
            log(`I am eating ${food}`);
        });
        return this;
    }
}

function LazyMan(name) {
    return new LazyManClass(name);
}

// test case
LazyMan("Tony").eat("junk food").sleep(5).sleepFirst(4).eat("dinner");
