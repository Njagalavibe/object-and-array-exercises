// beginner object execrices
/*1. Write a JavaScript program to list the properties of a JavaScript object.
Sample object:*/
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

let studentArr = []
for (key in student) {
    studentArr.push(key);
}
console.log(studentArr);
//--------------------------------------------------------------------------
/*2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
Sample object:*/
var pupil = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log(pupil)
let deleteProperty = () => {
    delete pupil.rollno
}
deleteProperty(pupil)
console.log(pupil)
//--------------------------------------------------------------------------
/*3. Write a JavaScript program to get the length of a JavaScript object.
Sample object :*/
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};


let studentLength = Object.keys(student).length
console.log(`Length of Object is ${studentLength}`)

//--------------------------------------------------------------------------
/*4. Write a JavaScript program to display the reading status 
(i.e. display book name, author name and reading status) of the following books.*/
var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];

for (let i = 0; i < library.length; i++) {
    let progress = library[i].author + ' ' + 'by' + ' ' + library[i].title;
    if (library[i].readingStatus == true) {
        console.log("Done reading" + " " + progress);
    } else {
        console.log("Need to read" + " " + progress);
    }

}
//--------------------------------------------------------------------------
//Using constructors

let animal = {
    name: 'kamal',
    age: 30,
    greet: function () {
        return `My name is ${this.name}, and my age is ${this.age} years old`;
    },
}
console.log(animal.greet());
//--------------------------------------------------------------------------
class Player {
    constructor(name, marker) {
        this.name = name;
        this.marker = marker;
        this.sayName = function () {
            return name
        }
    }
}
const player1 = new Player('mark Henry', 'X')
const player2 = new Player('nakiwoga milly', 'O')

console.log(player1.prototype)
console.log(Object.getPrototypeOf(player1) === Player.prototype)
console.log(player1.sayName())
console.log(player2.prototype)
console.log(Object.getPrototypeOf(player2))
console.log(player2.sayName())
//console.log(player1.sayBye());
console.log(player1.valueOf());
//--------------------------------------------------------------------------
class Books {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.info = function () {
            return `${title} by ${author}, ${pages}, ${read}`
        }
    }
}
const book1 = new Books('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet')
console.log(book1.info());

//--------------------------------------------------------------------------
class Person {
    constructor(name) {
        this.name = name;
    }
    welCome() {
        console.log(`Welcome to ${this.name}!`);
    }
}

//Prototypes and Inheritance 
class Town {
    constructor(name, population) {
        this.name = name;
        this.population = population;
    }
    //creating a new property (function) for our object
    missHome() {
        return 'i miss' + ' ' + this.name;
    }
    getPopulation() {
        console.log(`This town's population  is '${this.population}'`);
    }
}

// Object.getPrototypeOf(Town.prototype) should
// return the value of "Town.prototype" instead
// of "Object.prototype"
Object.getPrototypeOf(Town.prototype) // returns Object.prototype

// Now make `Player` objects inherit from `Person`
Object.setPrototypeOf(Town.prototype, Person.prototype)
Object.getPrototypeOf(Town.prototype) // returns Town.prototype

const town1 = new Town('Kamapala', '5 million people')
const town2 = new Town('Mbarara', '50 thousand people')

town1.welCome() // Welcome to Kampala!
town2.welCome()// Welcome to mbarara!

town1.getPopulation() // This town's population  is '5 million people'
town2.getPopulation() // This town's population  is '50 thousand people'

//--------------------------------------------------------------------------

//making a simple player object 
function Hero(name, level) {
    this.name = name;
    this.level = level;

}
Hero.prototype.sayHello = function () {
    return `Hello ${this.name}`
}


function Warrior(name, level, weapon) {
    Hero.call(this, name, level);
    this.weapon = weapon
}
Warrior.prototype.attack = function () {
    return `${this.name} attacks with a ${this.weapon}.`;
}

function Healer(name, level, spell) {
    Hero.call(this, name, level);
    this.spell = spell
}

Healer.prototype.heal = function () {
    return `${this.name} casts ${this.spell}.`;
}
//passing on Hero properties to both Warrior and Healer
Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);
let hero1 = new Hero("Patrick", 1)
console.log(hero1)
console.log(hero1.sayHello())
let hero2 = new Warrior('Bjorn', 1, 'axe');
console.log(hero2)
console.log(hero2.sayHello())
let hero3 = new Healer('Kanin', 1, 'cure');
//--------------------------------------------------------------------------
let pet = {
    eats: true,
    walk() {
        return 'Pet walks';
    },
};
let rabbit = {
    jumps: true,
};

let longEar = {
    earLength: 10,
};
Object.setPrototypeOf(rabbit, pet);
Object.setPrototypeOf(longEar, rabbit);
rabbit.walk = function () {
    return "Rabbit Bounces-around!";
};
//rabbit.__proto__ = animal old way of doing things, not encouraged
console.log(rabbit.eats);
console.log(rabbit.walk());
console.log(longEar.jumps);
for (key in rabbit) {
    let isOwn = rabbit.hasOwnProperty(key);

    if (isOwn) {
        console.log(`Own: ${key}`); // Our: jumps
    } else {
        console.log(`Inherited: ${key}`); // Inherited: eats
    };
}
//--------------------------------------------------------------------------

let user = {
    name: "John",
    surName: "Smith",
}
user.fullName = function () {
    return `${this.name} ${this.surName}`
}
let admin = {
    isAdmin: true
};
Object.setPrototypeOf(admin, user);
admin.name, admin.surName = "Alice ", "Cooper";
console.log(admin.fullName());
console.log(user.fullName());

//--------------------------------------------------------------------------
let mammals = {
    eggs: null
};
let blackBilledPlatapus = {
    eggs: true
};
Object.setPrototypeOf(blackBilledPlatapus, mammals);
console.log(blackBilledPlatapus.eggs);//true, taken from rabbit.

delete blackBilledPlatapus.eggs;
console.log(blackBilledPlatapus.eggs);//null, taken from animal.

delete mammals.eggs;
console.log(blackBilledPlatapus.eggs);//undefined, there’s no such property any more.
//--------------------------------------------------------------------------
let head = {
    glasses: 1
};

let table = {
    pen: 3
};

let bed = {
    sheet: 1,
    pillow: 2
};

let pockets = {
    money: 2000
};
Object.setPrototypeOf(table, head);
Object.setPrototypeOf(bed, table);
Object.setPrototypeOf(pockets, bed);
console.log(pockets.pen);
console.log(bed.glasses);
//--------------------------------------------------------------------------
let domesticAnimal = {
    eat() {
        this.full = true;
    }
};

let cow = {

};
Object.setPrototypeOf(cow, domesticAnimal);
console.log(cow.eat());
C
let hamster = {
    stomach: [],

    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {
    stomach: [],
};
Object.setPrototypeOf(speedy, hamster);

let lazy = {
    stomach: [],
};
Object.setPrototypeOf(lazy, hamster);
speedy.eat("apple");
console.log(speedy.stomach);
console.log(lazy.stomach);
//--------------------------------------------------------------------------


