// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*

const x = 23;
if (x == 23) console.log(23);

const calcAge = (birthYear) => 2037 - birthYear;

console.log();

const ficha = [1, 2, 'Bruno', 'Caio', 4, 'Victor', 5];

const ficha2 = [1, 6, 'Mensagem', 78, 'Viagem', 233, 'Metas', 6];
const ficha3 = [];

const filter_list = function (l) {
  let onlyNumber = [];
  if (l.length == 0) return l;
  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] == 'number' && i <= l.length - 1) {
      onlyNumber.push(l[i]);
    }
    if (i == l.length - 1) return onlyNumber;
  }
};

console.log(filter_list(ficha3));
console.log(ficha);
console.log(filter_list(ficha));
console.log(filter_list(ficha2));

console.log('---ONLY STRING---');
for (let i = 0; i <= ficha.length - 1; i++) {
  let onlyString = [];
  if (typeof ficha[i] !== 'string') continue;

  onlyString.push(ficha[i]);
}

function getMiddle(s) {
  if (s.length % 2 == 0) {
    const first = s[s.length / 2 - 1];
    const last = s[s.length / 2];
    return first + last;
  } else {
    const middle = s[s.length / 2 - 0.5]
    return middle;
  }
}

const myName = 'lx';
console.log(myName.length);
console.log(getMiddle(myName));

*/


const temp = [17, 21, 23];

const temp2 = [12, 5, -5 ,0 , 4];

const printForecast = function(arr) {
  let display = '';
  for (let i = 0; i < arr.length; i++) {
    display += `... ${arr[i]}°C in ${i+1} days`;
  } 
  return display;
}

console.log((printForecast(temp)));
console.log(printForecast(temp2));




/*
// Callback

function show(soma) {
  console.log(`A soma dos valores é ${soma}`);
}

function somando(n1, n2, myCallback) {
  let sum = 0;
  sum = n1 + n2;
  myCallback(sum);
}

console.log(somando(5, 9, show(sum)));

*/