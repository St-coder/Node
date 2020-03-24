function Hello() {
    var name;
    this.setName = function(thyName) {
        name =thyName;
    };
    this.sayHello = function() {
        console.log('hell0' + name);
    }
}
module.exports = Hello;