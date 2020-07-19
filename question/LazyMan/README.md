## LazyMan/茴字有几种写法系列

一道检验 JavaScript 异步编程基本功的题目。

```javascript
// A Design question

LazyMan("Tony");
// Hi I am Tony

LazyMan("Tony").sleep(10).eat("lunch");
// Hi I am Tony
// wait for 10 sec
// I am eating lunch

LazyMan("Tony").eat("lunch").sleep(10).eat("dinner");
// Hi I am Tony
// I am eating lunch
// wait for 10 sec
// I am eating diner

LazyMan("Tony")
    .eat("lunch")
    .eat("dinner")
    .sleepFirst(5)
    .sleep(10)
    .eat("junk food");
// Hi I am Tony
// wait for 5 sec..
// I am eating lunch
// I am eating dinner
// wait for 10 sec
// I am eating junk food
```
