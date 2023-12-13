const Greeter = function (strategy) {
    this.strategy = strategy;
};
Greeter.prototype.greet = function () {
    return this.strategy();
};
const politeGreetingStrategy = function () {
    console.log("Hello.");
};
const friendlyGreetingStrategy = function () {
    console.log("Hey!");
};
const boredGreetingStrategy = function () {
    console.log("sup.");
};
const politeGreeter = new Greeter(politeGreetingStrategy);
const friendlyGreeter = new Greeter(friendlyGreetingStrategy);
const boredGreeter = new Greeter(boredGreetingStrategy);
politeGreeter.greet();
friendlyGreeter.greet();
boredGreeter.greet();
//# sourceMappingURL=functionalStrategy.js.map