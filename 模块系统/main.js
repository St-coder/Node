var Hello = require("./hello");
hello = new Hello();
hello.setName(333);
hello.sayHello();

// 要暴露属性或者方法用exports
// 要暴露对象就用module.exports
// 不能一起用，会被覆盖