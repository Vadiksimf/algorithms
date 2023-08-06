/**
 * Decorator for time measures
 * @param  f  - function. Mandatory argument
 * @param ... - tuple of argiments separated by comma
 *
 */
 function timeDecorator(f) {
    const start = Date.now();
    f(...Array.from(arguments).splice(1))
    console.log('Time', Date.now() - start, 'ms\n')
}

const createArray = elsNumber => {
    console.log('Array created')
    return Array.from({ length: elsNumber }, (v, k) => k)
}

const forStatementSearch = (arr, el) => {
    for (let index = 0; index < arr.length; index++) {
        if (el === arr[index]) return console.log(`==> FOR: Element ${el} was found in position ${index}`)
    }
}

const binarySearch = (list, item) => {
    let low = 0;
    let high = list.length-1

    while (low <= high) {
        let mid = Math.floor((low + high)/2)
        let guess = list[mid]
        if (guess === item) 
            return console.log(`==> Binary search: Index of element '${item}' is ${mid}`)
        if (guess >= item) {
            high = mid - 1
        } else {
            low = mid + 1
        };
    };
    return  console.log('Item not found')
};


const array = createArray(10000000)
timeDecorator(forStatementSearch, array, 9999999)
timeDecorator(binarySearch, array, 9999999)

