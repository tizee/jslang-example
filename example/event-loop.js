const log = console.log;
const callback = (val) => {
    log(val);
};

log("enter");
setTimeout(() => {
    callback(1);
});
setTimeout(() => {
    callback(2);
}, 100);
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(3);
    });
});
p1.then((res) => {
    console.log(res);
});
let p2 = new Promise((resolve, reject) => {
    resolve(4);
});
p2.then((res) => {
    console.log(res);
});
log("exit");
