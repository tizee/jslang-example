const log = console.log;
function* g1() {
    yield 1;
    yield 2;
    return 3;
}

for (let value of g1()) {
    log(value); // 1->2
}

let range = {
    from: 1,
    to: 10,

    // for..of range calls this method once in the very beginning
    [Symbol.iterator]() {
        // ...it returns the iterator object:
        // onward, for..of works only with that object, asking it for next values
        return {
            current: this.from,
            last: this.to,

            // next() is called on each iteration by the for..of loop
            next() {
                if (this.current <= this.last) {
                    return { done: false, value: this.current++ };
                } else {
                    return { done: true };
                }
            },
        };
    },
};

log([...range]);

let range2 = {
    from: 2,
    to: 5,

    *[Symbol.iterator]() {
        // a shorthand for [Symbol.iterator]: function*()
        for (let value = this.from; value <= this.to; value++) {
            yield value;
        }
    },
};

log([...range2]);

// exchange with gen.next(value)
function* gen() {
    let ask1 = yield "2 + 2 = ?";

    log(ask1); // 4

    let ask2 = yield "3 * 3 = ?";

    log(ask2); // 9
}

let generator = gen();

log(generator.next().value); // "2 + 2 = ?"

log(generator.next(4).value); // "3 * 3 = ?"

log(generator.next(9).done); // true
