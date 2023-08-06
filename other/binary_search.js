const binarySearch = (arr, element) => {
    let middleIndex;
    let min = 0;
    let max = arr.length;

    while (max - min > 1) {
        middleIndex = Math.floor((min + max) / 2);

        if (arr[middleIndex] === element) {
            return middleIndex;
        } else if (arr[middleIndex] > element) {
            max = middleIndex;
        } else {
            min = middleIndex;
        }
    }

    return 'Not found'
}

console.log(binarySearch([2,3,4,5,6,7], 4))