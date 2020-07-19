const log = console.log;

let time = 0;
const fn1 = () => {
    queueMicrotask(() => {
        console.log(time++);
        setTimeout(() => {
            fn2();
        }, 0);
    });
};
const fn2 = () => {
    queueMicrotask(() => {
        console.log(time++);
        setTimeout(() => {
            fn1();
        }, 0);
    });
};

fn1();
