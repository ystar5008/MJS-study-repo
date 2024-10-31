function solution(string) {
    const stack = [];
    const matchingBrackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            // 여는 괄호는 스택에 추가
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            // 닫는 괄호의 경우 스택에서 짝을 맞추기
            if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
                return false;
            }
        }
    }

    // 스택이 비어 있어야 모든 괄호가 유효한 짝을 이룬 것임
    return stack.length === 0;
}

console.log(solution("()"))
console.log(solution("()[]{}"))
console.log(solution("(]"))
console.log(solution("([])")) 