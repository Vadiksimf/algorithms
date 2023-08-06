/**
 * Decorator for time measures
 * @param  f  - function. Mandatory argument
 * @param ... - tuple of argiments separated by comma
 *
 */
export function timeDecorator(f) {
    const start = Date.now();
    f(...Array.from(arguments).splice(1))
    console.log('Time', Date.now() - start, 'ms\n')
}

/*
** Цикл
*/
const cycle = amount => {
    let acc = 0
    for(let i = 0; i <= amount; i++)
        acc = acc + i
    console.log('Cycle result:', acc)
}

/*
** Рекурсия
*/
const recursion = (amount, acc = 0) => {
    while(amount <= 0) return console.log('Recursion result:', acc)
    recursion(amount - 1, acc + amount)
}

timeDecorator(cycle, 5000)
timeDecorator(recursion, 5000)
