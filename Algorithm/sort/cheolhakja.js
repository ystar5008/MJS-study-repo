class Philosopher {
    constructor(name, leftFork, rightFork) {
        this.name = name;
        this.leftFork = leftFork;
        this.rightFork = rightFork;
    }

    async eat() {
        await this.pickUpForks();
        console.log(`${this.name} is eating`);
        await this.putDownForks();
    }

    async pickUpForks() {
        console.log(`${this.name} is picking up forks`);
        await this.leftFork.acquire();
        await this.rightFork.acquire();
        console.log(`${this.name} picked up both forks`);
    }

    async putDownForks() {
        console.log(`${this.name} is putting down forks`);
        await this.leftFork.release();
        await this.rightFork.release();
        console.log(`${this.name} put down both forks`);
    }
}

class Fork {
    constructor() {
        this.isAcquired = false;
    }

    async acquire() {
        while (this.isAcquired) {
            await new Promise(resolve => setTimeout(resolve, 100)); // 다른 철학자가 사용 중이면 대기
        }
        this.isAcquired = true;
    }

    async release() {
        this.isAcquired = false;
    }
}

// 철학자와 젓가락 생성
const forks = Array.from({ length: 5 }, () => new Fork());
const philosophers = [
    new Philosopher('Philosopher 1', forks[0], forks[1]),
    new Philosopher('Philosopher 2', forks[1], forks[2]),
    new Philosopher('Philosopher 3', forks[2], forks[3]),
    new Philosopher('Philosopher 4', forks[3], forks[4]),
    new Philosopher('Philosopher 5', forks[4], forks[0])
];

// 모든 철학자들이 동시에 밥을 먹게 됨
Promise.all(philosophers.map(philosopher => philosopher.eat()));
