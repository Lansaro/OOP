console.log('Hello!')

class Ninja {
    constructor(name, health = 10) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(`Name is ${this.name}`);
        return this;
    }

    showStats() {
        console.log(`Health: ${this.health}\n Speed: ${this.speed}\n Strength: ${this.strength}`);
        return this;
    }

    drinkSake() {
        this.health += 10;
        return this;
    }
}

const ninja1 = new Ninja('Jack', 10);
ninja1.sayName().showStats().drinkSake().showStats();