const merge = (left, right) => {
    const result = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }

    return [...result, ...left, ...right]
}

const mergeSort = (arr) => {
    if (arr.length < 2) return arr;

    const middleIndex = Math.round(arr.length / 2);
    const left = arr.splice(0, middleIndex);

    return merge(mergeSort(left), mergeSort(arr));
}

// console.log(mergeSort([1,435, 64, 64,1,3, 55,45,3]))

const binarySearch = (arr, element) => {
    let middleIndex;
    let min = 0;
    let max = arr.length;

    while (min !== max) {
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

console.log(binarySearch([2,3,4,5,6,7], 1))

