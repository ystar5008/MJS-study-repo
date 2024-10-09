function bubbleSort(arr) {
    const length = arr.length

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1; j++) {
            console.log(arr[j], arr[j + 1])
            if (arr[j] > arr[j + 1]) {
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
            }
        }
    }

    return arr

}



const arr = [4, 30, 49, 11, 5]


console.log(bubbleSort(arr))
