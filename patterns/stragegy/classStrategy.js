class Composition {
    constructor(strategy) {
        this.strategy = strategy;
    }
    executeStrategy(a, b) {
        return this.strategy.execute(a, b);
    }
}
// Concrete Strategies
class Add {
    execute(a, b) {
        return a + b;
    }
}
class Subtract {
    execute(a, b) {
        return a - b;
    }
}
class Multiply {
    execute(a, b) {
        return a * b;
    }
}
class Divide {
    execute(a, b) {
        return a / b;
    }
}
// Compositor
class Compositor {
    constructor(strategy) {
        this.strategy = strategy;
    }
    executeStrategy(a, b) {
        return this.strategy.execute(a, b);
    }
}
// Usage
const addCompositor = new Compositor(new Add());
console.log(addCompositor.executeStrategy(1, 2));
const subtractCompositor = new Compositor(new Subtract());
console.log(subtractCompositor.executeStrategy(1, 2));
const multiplyCompositor = new Compositor(new Multiply());
console.log(multiplyCompositor.executeStrategy(1, 2));
const divideCompositor = new Compositor(new Divide());
console.log(divideCompositor.executeStrategy(1, 2));
// Output
// 3
// -1
// 2
// 0.5
//=============================================
//# sourceMappingURL=classStrategy.js.map