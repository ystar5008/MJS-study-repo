

//주어진 배열의 값을 사용하여 새로운 Buffer 생성
const bufferArray = Buffer.from([1, 2, 3, 4, 5]);
console.log(bufferArray)

//Buffer의 일부 또는 전체를 문자열로 변환
const bufferString = Buffer.from('안녕하십니까');
console.log(bufferString)
console.log(bufferString.toString('utf-8'))

//toJSON Buffer JSON으로 변환
const buffe123 = Buffer.from('안녕하세요');
const json = buffer.toJSON();
console.log(buffer)
console.log(json);
console.log(json.type);
console.log(json.data);


const bufferstr1 = Buffer.from('1234');
const bufferstr2 = Buffer.from('123');
const result = bufferstr1.compare(bufferstr2)
console.log(bufferstr1)
console.log(bufferstr2)
console.log(result);

// size가 10인 빈 buffer를 만듭니다.
// 이 버퍼는 오직 10 byte만 담을 수 있습니다.
const buffer = Buffer.alloc(10)
console.log(buffer)

const bufferStr1 = Buffer.alloc(10, '0123456789');
console.log(bufferStr1)
console.log(bufferStr1.toString('utf-8'))

const bufferStr2 = Buffer.alloc(10, '0123456789asfkasklfnkl');
console.log(bufferStr2)
console.log(bufferStr2.toString('utf-8'))

/// buffer 에 데이터를 담아 만듭니다.
// 생성자 함수로 buffer를 생성하지 않음
const buffer2 = Buffer.from("안녕하세요");
const buffer3 = Buffer.alloc(20, "안녕하세요");

console.log(buffer3.length)
console.log(buffer3.byteLength)
console.log(buffer3.length)
console.log(typeof buffer2) //object

console.log(buffer1.toJSON())
console.log(buffer2.toJSON())

// toJSON 메서드는 데이터를 Unicode Code Points 로 표현합니다.


// 버퍼의 크기를 조사합니다.

buffer1.length // 10

buffer2.length // 12. 파라미터로 넣어주었던 content에 따라 자동으로 크기가 할당됩니다.

// 버퍼에 쓰기
buffer1.write("Buffer really rocks!");

console.log(buffer1)
// 버퍼를 Decoding 합니다.

buffer1.toString(); // 'Buffer rea'

// buf1 은 10 byte 밖에 담을 수 없기 때문에, 나머지 문자들은 할당할 수 없습니다.

const buf = Buffer.from('hello world', 'ascii');

// Prints: 68656c6c6f20776f726c64
console.log(buf.toString('hex'));

// Prints: aGVsbG8gd29ybGQ=
console.log(buf.toString('base64'));


//문자열을 버퍼 uft-8로 변환
//68656c6c6f20776f726c64
const bufferData = Buffer.from('안녕하세요', 'utf-8');

//변환된 버퍼를 base64로 인코딩
const base64Encoded = bufferData.toString('base64');

console.log('uft8 버퍼를 base64로 인코딩', base64Encoded);



const base64Encoded2 = 'SGVsbG8sIFdvcmxkIQ==';

// Base64를 Buffer로 디코딩
const bufferData2 = Buffer.from(base64Encoded2, 'base64');

// Buffer를 문자열로 변환
const decodedData = bufferData2.toString('utf-8');

console.log('Base64 Decoded:', decodedData);
