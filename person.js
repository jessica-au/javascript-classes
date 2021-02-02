class Person {
    constructor(name, softwareEngineer) {
        this.arms =2;
        this.legs =2;
        this.name = name;
        this.softwareEngineer = softwareEngineer;
        this.artists= [];
    }
    greet() {
        console.log('Hello SEI-111');
    }
    walk() {
        console.log('Walking along the beach.');
    }
    eat(food) {
        console.log(`Today I am eating ${food}`)
    }
    addArtist(artist) {
        console.log(`I like ${artist}`);
        this.artists.push(artist);
    }
}

const princeLeo =  new Person('Leo Brooks', true);
console.log(princeLeo.name);
console.log(princeLeo.softwareEngineer);

princeLeo.walk();
princeLeo.eat('Dinosaur Chicken Nuggets');
princeLeo.jump = function() {
    console.log('Weeee');
}
princeLeo.jump();
princeLeo.addArtist('Rico Nasty');
princeLeo.addArtist('yeye');
console.log(princeLeo.artists);

const sophia = new Person('Sophia', true);
console.log(sophia.name);
sophia.laugh = function () {
    console.log('Hahaha')
}
sophia.laugh();
const mocha = new Person('Mocha', true);
console.log(mocha.softwareEngineer);
mocha.sigh = function() {
    console.log('sigh.');
}
mocha.sigh();

