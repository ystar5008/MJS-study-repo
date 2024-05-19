function binarySearch(arr, target) {
    let left = 0;
    //arr.length => 8 - 1
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // 찾았을 경우 인덱스 반환
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // 찾지 못한 경우 -1 반환
}

// 예시 정렬된 배열
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 이진 탐색 적용
const targetIndex = binarySearch(sortedArray, 9);
console.log("찾은 값의 인덱스:", targetIndex);
