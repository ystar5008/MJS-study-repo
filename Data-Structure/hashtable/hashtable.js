class HashTable {
    constructor(size = 50) {
        // 50짜리 빈배열 생성
        this.buckets = new Array(size); // 해시 테이블의 저장 공간 (버킷)
        this.size = size;
    }

    // 해시 함수: 문자열을 인덱스로 변환
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.size;
        }
        return hash;
    }

    // 키-값 쌍 추가
    set(key, value) {
        const index = this._hash(key);
        if (!this.buckets[index]) {
            this.buckets[index] = [];
        }
        this.buckets[index].push([key, value]); // 충돌 시, 배열에 추가
    }

    // 키를 통한 값 검색
    get(key) {
        const index = this._hash(key);
        const bucket = this.buckets[index];
        if (!bucket) return null;

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                return bucket[i][1];
            }
        }
        return null;
    }

    // 키를 통한 값 삭제
    remove(key) {
        const index = this._hash(key);
        const bucket = this.buckets[index];
        if (!bucket) return null;

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1); // 해당 키-값 쌍 삭제
                return true;
            }
        }
        return false;
    }
}

// 해시 테이블 사용 예시
const ht = new HashTable();
ht.set("name", "Charlie");
ht.set("age", 28);
console.log(ht.buckets)
console.log(ht.get("name")); // Charlie
ht.remove("age");
console.log(ht.get("age")); // null
