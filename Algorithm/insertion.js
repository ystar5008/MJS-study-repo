function insertionSort(arr) {
    const len = arr.length;
    for (let i = 1; i < len; i++) {
        let current = arr[i]; // 현재 요소를 저장
        let j = i - 1; // 현재 요소의 바로 이전 요소부터 시작하여 비교
        // 현재 요소를 정렬된 부분 배열에 삽입
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j]; // 뒤로 이동
            j--;
        }
        arr[j + 1] = current; // 현재 요소를 삽입
    }
    return arr;
}

// 테스트
const arrayToSort = [5, 3, 8, 4, 2];
console.log("정렬 전: " + arrayToSort);
console.log("정렬 후: " + insertionSort(arrayToSort));
