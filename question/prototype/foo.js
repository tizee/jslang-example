function Foo() {
    Foo.a = function () {
        console.log(1);
    };
    this.a = function () {
        console.log(2);
    };
}
Foo.prototype.a = function () {
    console.log(3);
};
Foo.a = function () {
    console.log(4);
};
Foo.a();
let obj = new Foo(); // change Foo's prototype when creating obj.
obj.a(); // first local context then find in parent's prototype
Foo.a();

// 4->2->1
