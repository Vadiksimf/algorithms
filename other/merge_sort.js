const merge = (arr1, arr2) => {
    const result = [];

    while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
            result.push(arr1.shift())
        } else {
            result.push(arr2.shift())
        }
    }

    return [...result, ...arr1, ...arr2];
}

const mergeSort = (arr) => {
    if (arr.length < 2) return arr
    const middleIndex = Math.round(arr.length / 2);

    const left = arr.splice(0, middleIndex);
    
    return merge(mergeSort(left), mergeSort(arr))
}

console.log(mergeSort([1,4,6,8,2,5,0,11,23,44,56]))
