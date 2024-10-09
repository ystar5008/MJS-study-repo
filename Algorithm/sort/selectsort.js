function selectionSort(arr) {
    var len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        // 최소값을 가진 요소의 인덱스를 저장하는 변수
        let minIndex = i;
        // 현재 위치부터 배열의 끝까지 최소값을 탐색
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; // 최소값을 가진 요소의 인덱스 갱신
            }
        }
        // 현재 위치와 최소값을 가진 요소를 교환
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

// 테스트
var arrayToSort = [5, 3, 8, 4, 2];
console.log("정렬 전: " + arrayToSort);
console.log("정렬 후: " + selectionSort(arrayToSort));
