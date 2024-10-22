class Node {
    constructor(data) {
        this.data = data;
        this.next = null; // 다음 노드를 가리키는 포인터
    }
}


class LinkedList {
    constructor() {
        this.head = null; // 연결 리스트의 첫 번째 노드를 가리킴
    }

    // 리스트의 끝에 노드를 추가하는 함수
    append(data) {
        // 0 , 1 ,2
        const newNode = new Node(data);
        // 초기값 null
        // 비어있는 경우
        // !null
        if (!this.head) {
            /**
              { data: 1, next: null }
            */
            // { data: 1, next: null }
            this.head = newNode; // 리스트가 비어있을 경우 첫 번째 노드를 할당
        } else {
            let current = this.head;
            // { data: 1, next: null }
            // current.next는 null 혹은 {data : 2 , next: Node { ... }}
            while (current.next) { // 마지막 노드까지 순회
                // next가 null인 경우에만 할당하는 코드로 변경?
                current = current.next;
            }
            current.next = newNode; // 마지막 노드의 next를 새 노드로 연결
        }
    }

    // 리스트의 앞에 노드를 추가하는 함수
    prepend(data) {
        // data를 받아 새 Node 객체를 생성합니다.
        // data : string | number
        const newNode = new Node(data);
        // newNode = Node { data : data , next : null | Node }
        // 새 노드의 next를 현재 head로 설정
        newNode.next = this.head;
        // head를 새 노드로 변경
        this.head = newNode;
    }

    // 특정 데이터를 가진 노드를 삭제하는 함수
    delete(data) {
        if (!this.head) return; // 리스트가 비어있으면 종료

        if (this.head.data === data) {
            this.head = this.head.next; // head가 삭제하려는 데이터면, head를 다음 노드로 변경
            return;
        }

        // head부터 시작해서 각 노드를 순차적으로 탐색하며 삭제하려는 데이터를 가진 노드를 찾습니다.
        let current = this.head;
        while (current.next && current.next.data !== data) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next; // 노드 삭제
        }
    }

    // 리스트의 모든 노드를 출력하는 함수
    printList() {
        let current = this.head;
        console.log(current)
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}



const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);

list.printList(); // 0, 1, 2, 3 출력

list.delete(2);

list.printList(); // 0, 1, 3 출력

