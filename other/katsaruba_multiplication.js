const timeDecorator = require('./utils.js');

/**
 * 
 * @param {*} x first number
 * @param {*} y sedond number
 * @param {*} n number lenght. Power of 2
 */
const katsarubaMuliptication = (x, y) => {
    const n = String(x).length
    console.log(x, y, n)
    if (n === 1) return x * y;
    if (!n) return;

    const numberSeparator = (x) => {
        const stiringRepresentation = String(x);
        const partMiddle = n / 2;

        return [
            Number(Array.from(stiringRepresentation).splice(0, partMiddle).join('')), 
            Number(Array.from(stiringRepresentation).splice(partMiddle, n).join(''))
        ]
    }

    const [a, b] = numberSeparator(x)
    const [c, d] = numberSeparator(y)

    const ac = katsarubaMuliptication(a, c);
    const ad = katsarubaMuliptication(a, d);
    const bc = katsarubaMuliptication(b, c);
    const bd = katsarubaMuliptication(b, d);

    const result = (10 ** n) * ac + (10 ** (n/2)) * (ad + bc) + bd;

    console.log(result)

    return result
}

const multiplication = (x, y) => {
    const reslut = x * y;
    console.log(reslut);

    return reslut;
}

timeDecorator(katsarubaMuliptication, 1234, 5678, 16)
timeDecorator(multiplication, 1234, 5678)
