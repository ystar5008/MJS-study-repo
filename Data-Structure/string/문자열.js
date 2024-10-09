class CustomString {
    constructor(str = "") {
        this.str = str
    }

    //문자열의 길이 반환
    length() {
        return this.str.length
    }

    //문자열 초기화
    append(text) {
        this.str += text
    }

    //문자열에서 특정 문자열 삭제
    remove(char) {
        this.str = this.str.split(char).join("")
    }


    //문자열에서 특정문자 찾기
    find(substring) {
        return this.str.indexOf(substring)
    }

    //문자열 반환
    get() {
        return this.str
    }

    //문자열 초기화
    clear() {
        this.str = ""
    }
}

const customString = new CustomString("안녕")
console.log(customString.get())
customString.append("하세요")
console.log(customString.get())
console.log(customString.length())
console.log(customString.find("하"))
console.log(customString.get().split(""))
console.log(customString.remove("하"))
console.log(customString.get())


