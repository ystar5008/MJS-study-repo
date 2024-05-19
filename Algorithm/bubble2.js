function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        // 매 반복마다 배열을 한 번 더 순회하며 인접한 두 요소를 비교하여 정렬
        for (var j = 0; j < len - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // 두 요소를 교환
                //var temp = arr[j];
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                //arr[j, j + 1] = arr[j + 1, j];
                //arr[j + 1] = temp;
                console.log(`정렬이 실행된 배열 ${arr}`)
            }
        }
    }
    return arr;
}

// 테스트
var arrayToSort = [5, 3, 8, 4, 2];
console.log("정렬 전: " + arrayToSort);
console.log("정렬 후: " + bubbleSort(arrayToSort));
