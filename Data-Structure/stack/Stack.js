class Stack {
    constructor() {
        this.items = []; // 스택을 배열로 구현
    }

    get length() {
        return this.items.length
    }

    // 스택에 요소를 추가하는 메소드 (삽입)
    push(element) {
        this.items.push(element);
    }

    // 스택에서 요소를 제거하고 반환하는 메소드 (제거)
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }

    // 스택의 최상단 요소를 반환하는 메소드 (조회)
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    // 스택이 비어있는지 확인하는 메소드
    isEmpty() {
        return this.items.length === 0;
    }

    // 스택의 모든 요소를 출력하는 메소드
    printStack() {
        console.log(this.items.join(", "));
    }

    find(a) {
        let arr = this.items
        return arr.indexOf(a)
    }
}


const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.printStack(); // 10, 20, 30 출력

console.log(stack.pop()); // 30 반환 및 제거
stack.printStack(); // 10, 20 출력

console.log(stack.peek()); // 20 반환 (최상단 요소)

// 길이를 출력
console.log(stack.length)
console.log(stack.find(20))
