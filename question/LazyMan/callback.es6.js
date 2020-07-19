const log = console.log;

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

// a simple test use cases
LazyMan("Tony")
    .eat("lunch")
    .eat("dinner")
    .sleepFirst(4)
    .sleep(5)
    .eat("junk food");
