class TreeNode {
    constructor(value) {
        this.value = value; // 노드의 값
        this.children = []; // 자식 노드를 저장할 배열
    }

    // 자식 노드를 추가하는 메서드
    addChild(childNode) {
        this.children.push(childNode);
    }
}

// 루트 노드를 생성
const root = new TreeNode('root');

// 자식 노드 추가
const child1 = new TreeNode('child1');
const child2 = new TreeNode('child2');
root.addChild(child1);
root.addChild(child2);

// 자식의 자식 노드 추가
const grandChild1 = new TreeNode('grandChild1');
child1.addChild(grandChild1);

console.log(root);
function depthFirstSearch(node) {
    console.log(node.value); // 현재 노드 출력

    // 자식 노드에 대해 DFS 호출
    node.children.forEach((child) => depthFirstSearch(child));
}

// DFS 호출
depthFirstSearch(root);

function breadthFirstSearch(root) {
    const queue = [root]; // 탐색할 노드를 담는 큐

    while (queue.length > 0) {
        const node = queue.shift(); // 큐에서 노드를 꺼냄
        console.log(node.value);

        // 자식 노드를 큐에 추가
        node.children.forEach((child) => queue.push(child));
    }
}

// BFS 호출
breadthFirstSearch(root);
