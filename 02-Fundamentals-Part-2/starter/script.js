'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;

if (hasDriversLicense) console.log('I can drive :D!');

// const interface = 'Audio';

// const private = 534;
*/


/*
function logger() {
    console.log('My name is Jonas');
}

// invoking, calling or running the funcion

logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const appleJuice = fruitProcessor (5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));


const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
*/

/*
// function declaration - podemos chama-la antes de sua declaração, ou seja, acima
function calcAge1(birthYear) {
    return 2037 - birthYear;
}


const age1 = calcAge1(2000);

console.log(age1);

// function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(2000);

console.log(age2);
console.log(calcAge2(2000));
*/


/*
// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(2000);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(2000, "Victor"));
console.log(yearsUntilRetirement(2003, "Gustavo"));
*/


/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    console.log(apples, oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`
    return juice;
}

console.log(fruitProcessor(2, 3));
*/


/*
const calcAge =  function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {  
        console.log(`${firstName} has already retired.`);
        return -1; // significa que não tem sentido
    }
}

console.log(yearsUntilRetirement(2000, 'Victor'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/


/*

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`
}

///////////////////////////////////////////////////

const calcAvarage =(a, b, c) => (a + b + c) / 3;
console.log(calcAvarage(3,4,5))


// Test 1 
let scoreDolphins = calcAvarage(44, 23, 71);
let scoreKoalas = calcAvarage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win! ${avgDolphins} vs. ${avgKoalas}`)
    } else if (avgKoalas >= 2*avgDolphins) {
        console.log(`Koalas win! ${avgKoalas} vs. ${avgDolphins}`)
    } else {
        console.log(`No team wins...`)
    }
}

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(123, 452);

// Test 2
scoreDolphins = calcAvarage(85, 54, 41);
scoreKoalas = calcAvarage(23, 34, 27);

console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

*/

/*

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length -1]); // temos -1 pois começamos no 0
console.log(friends[friends.length -2]);

friends[2] = 'Jay';
console.log(friends);

// Somente valores primitivos não podem ser mudados
// Array não é um valor primitivo!
// Não podemos mudar o vetor inteiro!


const firstName = 'Jonas';
const jonas = ['Jonas', 'Schmedtmmann', 2037 - 1991,
 'teacher', friends];
 console.log(jonas.length);

 */


/*

// Exercise 

 const calcAge =  function (birthYear) {
    return 2037 - birthYear;
 }

 const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [age1, age2, age3];
const ages1 = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

console.log(ages, ages1);

*/


/*

let person = {firstName:'John', lastName: 'Robert'};

(function() {
    console.log(person.firstName + ' ' + person.lastName);
}(person));


let add = (a, b) => a + b;
console.log(add(5,2));

let show = () => console.log('Annonymous functions');
console.log(show());




const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay'); // last element add


// Add elements
console.log(friends);
console.log(newLength);

friends.unshift('John'); // first element
console.log(friends);

console.log(friends.indexOf('Steven'));

// Remove elements
friends.pop(); // last element
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // first element
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));


friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));
// inclue -> test the strict mode (===)


if (friends.includes('Peter')) {
    console.log('You have a friend called Peter');
} else {
    console.log('You do not have a friend called Peter')
}

*/

/*

// Challenge #2

const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;


const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];


const totals = [bills[0] + tips[0],bills[1] + tips[1], bills[2] + tips[2]]

console.log(bills, tips, totals);

*/


/*

const jonasArray = [
    'Jonas', 
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']

}

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? Choose betwen firstName,lastName, agr, job and friends')

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose betwen firstName,lastName, agr, job and friends')
}

jonas.location = 'Portugal';
jonas['twiter'] = '@habechian.arte';
console.log(jonas);

// Challenge
// Jonas has 3 friens, and his best friends is called Michael

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)

*/


/*

const jonas = {

    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    /*
    calcAge: function(birthYear) {
        return 2037 - birthYear;
    }
        */

    /*
    calcAge: function() {
        // console.log(this);
        return 2037 - this.birthYear;
    }


    calcAge: function() {
        this.age = 2037 - this.birthYear; // create new propreties
        return this.age;
    },
    getSummary: function() {
        this.calcAge()
        const answer = this.hasDriversLicense ? 'has': 'has no';
        console.log(`${this.firstName} is a ${this.age} years old teacher, and he ${answer} driver's license`)
    }

}

console.log(jonas.calcAge());
// console.log(jonas['calcAge'](1991));

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);


// Challenge

const Robert = {

    firstName: 'Robert',
    lastName: 'Junior',
    birthYear: 1980,
    job: 'artist',
    friends: ['John', 'Peter', 'Michael'],
    hasDriversLicense: false,
    calcAge: function() {
        this.age = 2022 - this.birthYear;
    },
    getSummary: function() {
        this.calcAge()
        const answer = this.hasDriversLicense ? 'has': 'has no';
        console.log(`${this.firstName} is a ${this.age} years old teacher, and he ${answer} driver's license`)
    }
}


const Paulo = {

    firstName: 'Paulo',
    lastName: 'Carmino',
    birthYear: 2001,
    job: 'studant',
    friends: ['John', 'Peter', 'Michael'],
    hasDriversLicense: true,
    calcAge: function() {
        this.age = 2022 - this.birthYear;
    },
    getSummary: function() {
        this.calcAge()
        const answer = this.hasDriversLicense ? 'has': 'has no';
        console.log(`${this.firstName} is a ${this.age} years old ${this.job}, and he ${answer} driver's license`)
    }
}


// Jonas is a 46-years old teacher.


console.log(jonas.getSummary());
console.log(Robert.getSummary());
console.log(Paulo.getSummary());

*/

/*

const john = {
    firstName: 'John',
    lastName: 'Smith',
    fullName: function() {
        this.fullName = this.firstName + ' ' + this.lastName;
        return this.fullName;
    },
    mass: 78,
    height: 1.69,
    BMI: function() {
        this.BMI = this.mass/(this.height**2);
        return this.BMI;
    }
}

const Mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    fullName: function() {
        this.fullName = this.firstName + ' ' + this.lastName;
        return this.fullName;
    },
    mass: 92,
    height: 1.95,
    BMI: function() {
        this.BMI = (this.mass)/(this.height**2);
        return this.BMI;
    }
}

console.log(john.fullName());
console.log(john.BMI());

console.log(Mark.fullName());
console.log(Mark.BMI());

*/

/*

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} `);
}

*/

/*

const jonas = [
    'Jonas', 
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];

for (let i = 0; i <= jonas.length - 1; i++) {
    // reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

    // filling types array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types);


const years = [1991, 2007, 1969, 2020];

const age = [];

for (let i = 0; i <= years.length - 1; i++) {
    age.push(2037 - years[i]); 
}

console.log(age);

// continue and break
console.log('---ONLY STRING---')
for (let i = 0; i <= jonas.length - 1; i++) {
    if (typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}


console.log('---BREAK WITH NUMBER---')
for (let i = 0; i <= jonas.length - 1; i++) {
    if (typeof jonas[i] == 'number') break;

    console.log(jonas[i], typeof jonas[i]);
}

*/

/*

const jonas = [
    'Jonas', 
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i], typeof jonas[i]);
}

// Loop inside Loop
for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`----- Starting Exercise ----- ${exercise}`);

    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Exercise ${exercise}: lifting weight repetitions ${rep}`);
    }
}

*/

/*

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

let rep = 1;
while (rep <= 10) {
    // console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice == 6) console.log('Loop is about to end...');
}

*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];

const total = [];

let sum = 0;

for (let i = 0; i <= bills.length - 1; i++) {
    
    if (bills[i] >= 50 && bills[i] <= 300) {
        tips.push(bills[i]*0.15);
    } else {
        tips.push(bills[i]*0.2);
    }
    total.push(bills[i] + tips[i]);
    sum += total[i];

} 

const calcAverage = function (a) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum/a.length;
}

console.log(bills);
console.log(tips);
console.log(total);
console.log(sum);
console.log(calcAverage(total));


/*
const myFunction = function (a) {
    let last = [];
    for (let i = a.length - 1; i >= a.length - 3; i--) {
        last.unshift(a[i]);
    }
    return last;
}

const myFunction2 = function (a) {
let first = [];
    for (let i = 0; i <= 2; i++) {
        first.push(a[i]);
    } return first;
}

console.log(myFunction([1,5,7,2,6]));
console.log(myFunction2([1,5,7,2,6]));

const myFunction3 = function (a, n) {
    for (let i = 1; i <= a.length; i++) {
        if (i == n) {
            return a[i];
        }
    } 
}

console.log(myFunction3('victor', 3));

const myName = 'Victor';
console.log(myName[4]);

*/







