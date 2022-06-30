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

// const ninja1 = new Ninja('Jack', 10);
// ninja1.sayName().showStats().drinkSake().showStats();

class Sensei extends Ninja {
    constructor(name, health, speed, strength) {
        super(name, health, speed, strength);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom() {
        this.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
        return this;
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom().showStats();