const os = require('os');

/**
 * Measure of time execution for function
 * @param {*} f - function to measure
 * @returns Time in ms
 */
function memoryDecorator(f) {
    const start = os.freemem() * 0.000001
    const result = f(...Array.from(arguments).splice(1))
    console.log(`Busy ${(start - os.freemem() * 0.000001).toFixed(2)} Mb\n`);

    return result
}

/**
 * Measure space of data structure
 * @param {*} data - Array, Object or map
 * @param {*} method - type of operation with data
 * @returns Busy memory in MB
 */
function timeDecoratorObjects(data, method) {
    const start = Date.now();
    // console.log(Object.getPrototypeOf(data) === Array.prototype)
    let result = undefined
    if (Object.getPrototypeOf(data) === Map.prototype)
        switch (method) {
            case 'get': result = data.get(arguments[2])
            case 'set': result = data.set(arguments[2])
    } else if (Object.getPrototypeOf(data) === Object.prototype) {
        switch (method) {
            case 'get': result = data[arguments[2]]
            case 'set': data[arguments[2]] = arguments[2]
        }
    } else if (Object.getPrototypeOf(data) === Array.prototype) {
        switch (method) {
            case 'get': result = data[arguments[2]]
            case 'push': result = data.push(arguments[2])
            case 'pop': result = data.pop(arguments[2])
            case 'unshift': result = data.unshift(arguments[2])
            case 'shift': result = data.shift(arguments[2])
        }
    }
    console.log(`Time for '${arguments[1]}' from ${Array.isArray(data) ? '[Array]' : Object.getPrototypeOf(data)} is ${Date.now() - start} ms\n`)

    return result
}


const createObject = els => {
    const obj = {}
    for(let i = 0; i < els.length; i++ ) {
        obj[i] = i
    }
    console.log('Object created')

    return obj
}


const createMap = els => {
    const map = new Map()
    for(let i = 0; i < els.length; i++) {
        map.set(i, i)
    }
    console.log('Map created')

    return map
}


const createArray = elsNumber => {
    console.log('Array created')
    return Array.from({ length: elsNumber }, (v, k) => k)
}

const array = memoryDecorator(createArray, 1000000)
const object = memoryDecorator(createObject, array)
const map = memoryDecorator(createMap, array)

timeDecoratorObjects(array, 'get', 999999)
timeDecoratorObjects(object, 'get', 999999)
timeDecoratorObjects(map, 'get', 999999)
