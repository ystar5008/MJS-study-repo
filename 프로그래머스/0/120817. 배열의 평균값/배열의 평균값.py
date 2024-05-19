def solution(numbers):
    result = 0
    for i in numbers:
        result += i
    return result / len(numbers)