/**
 * Decorator for time measures
 * @param  f  - function. Mandatory argument
 * @param ... - tuple of argiments separated by comma
 *
 */
module.exports = function timeDecorator(f) {
    const start = Date.now();
    f(...Array.from(arguments).splice(1))
    console.log('Time', Date.now() - start, 'ms\n')
}