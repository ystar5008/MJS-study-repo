# 테스트 케이스 개수 입력
T = int(input())

# 각 테스트 케이스에 대해 A+B 출력
for _ in range(T):
    A, B = map(int, input().split())
    result = A + B
    print(result)
