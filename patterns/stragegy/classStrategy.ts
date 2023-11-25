// Detailed examples of Strategy Pattern in TypeScript
//=============================================
// Strategy interface
interface Strategy {
    execute(a: number, b: number): number;
}

class Composition {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    executeStrategy(a: number, b: number): number {
        return this.strategy.execute(a, b);
    }
}

// Concrete Strategies
class Add implements Strategy {
    execute(a: number, b: number): number {
        return a + b;
    }
}

class Subtract implements Strategy {
    execute(a: number, b: number): number {
        return a - b;
    }
}

class Multiply implements Strategy {
    execute(a: number, b: number): number {
        return a * b;
    }
}

class Divide implements Strategy {
    execute(a: number, b: number): number {
        return a / b;
    }
}

// Compositor
class Compositor {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    executeStrategy(a: number, b: number): number {
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
