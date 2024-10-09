class Arraay {
    constructor() {
        this.data = {}
        this.length = 0
    }

    /**
     * 
     * @param {number} element 
     * @returns number
     */
    push(element) {
        //현재 배열의 인덱스
        //this.data[0]
        //this.data[1] 
        //this.data[2]
        this.data[this.length] = element
        this.length++
        return element

    }

    pop() {
        //배열의 길이거 0이면 return undefined
        if (this.length === 0) undefined
        // 배열의 마지막 요소를 변수에 저장
        //{ 0 : 5 , 1 : 2 }  [ 2 - 1 ]
        const lastElement = this.data[this.length - 1]
        //마지막 요소 제거
        delete this.data[this.length - 1]
        this.length--
        return lastElement
    }

    /**
     * 특정 인덱스의 요소 가져오기
     * @param number
     */


    get(index) {
        //현재 배열의 길이보다 찾으려는 인덱스의 수가 더 크면 undefined
        if (this.length < index) undefined
        return this.data[index]
    }

    delete(index) {
        //삭제하려는 배열의 값
        const item = this.data[index]
        this.shiftItems(index)
        return item
    }

    shiftItems(index) {
        //전달된 인덱스 부터 배열의 마지막 요소까지 탐색
        for (let i = index; i < this.length - 1; i++) {
            //index이후에 있는 모든 요소를 한칸씩 앞으로 당김
            //data[index]는 제거됨
            console.log(this.data)
            this.data[i] = this.data[i + 1];
        }
        //마지막 요소가 중복되었으므로 배열의 끝에있는 요소를 삭제
        delete this.data[this.length - 1];
        this.length--;
    }

    //배열의 크기 반환
    size() {
        return this.length;
    }
}

const array = new Arraay()
console.log(array.push(5))
console.log(array.push(3))
console.log(array.push(4))
console.log(array.push(4))
console.log(array.push(4))
console.log(array.push(4))
console.log(array.length) // 2
console.log(array.data) // { 0 : 5  , 1 : 3}
console.log(array.pop()) // 4 마지막 요소 제거
console.log(array.length)
console.log(array.data)
console.log(array.get(2))
console.log(array.delete(1)) 