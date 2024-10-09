class CustomString {
    constructor(str = "") {
        this.str = str
    }

    length() {
        return this.str.length
    }

    append(text) {
        this.str += text
    }

    //문자열에서 특정 문자열 삭제
    remove(char) {
        this.str = this.str.split(char).join("")
    }

    find(substring) {
        return this.str.indexOf(substring)
    }

    get() {
        return this.str
    }

    clear() {
        this.str = ""
    }
}

const customString = new CustomString("안녕")
console.log(customString.get())
customString.append("하세요")
console.log(customString.get())
