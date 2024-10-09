let _str = {
    key: 'value',
    toLowerCase() {
    }
}

let str = '1'

str.toLowerCase()
_str.toLowerCase()
console.log(typeof str)
console.log(_str instanceof String)
