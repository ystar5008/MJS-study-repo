function bubbleSort(arr) {
    //n = 현재 배열의 길이
    const n = arr.length;
    //배열 길이 - 1  만큼 반복문
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            //현재 값이 다음 배열의 값보다 클떄
            if (arr[j] > arr[j + 1]) {
                // Swap
                //현재 배열의 위치와 다음 배열의 위치를 바꿈
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

const arr = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(arr)); // 결과: [11, 12, 22, 25, 34, 64, 90]
