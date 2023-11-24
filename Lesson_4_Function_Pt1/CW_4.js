// function writer(producttitle, price, descr) {
//   document.write(
//       `
//     <div>
//     <h2>${producttitle} ${price}</h2>
//     <p>${descr}</p>
// </div>
//    `
//   );
// }
// writer('milk', '32', 'some milk');


//|||||||||||||||||||||||||||||||||||||||||


// function calc(a, b) {
//     let result = a + b;
//     return result;
// }
//
// let r1 = calc(10, 20);
// let r2 = calc(20, 22);
// console.log(r1, r2);


// function tax(sum) {
//     let pdv = sum / 100 * 20;
//     let warTax = sum / 100 * 1.5;
//     return sum - pdv - warTax;
// }
//
// let number = tax(10000);
// console.log(number);

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

let users2 = [
    {id: 'vasya', age: 31, status: false},
    {id: 'petya', age: 30, status: true},
    {id: 'kolya', age: 29, status: true},
    {id: 'olya', age: 28, status: false},
    {id: 'max', age: 30, status: true},
    {id: 'anya', age: 31, status: false},
    {id: 'oleg', age: 28, status: false},
    {id: 'andrey', age: 29, status: true},
    {id: 'masha', age: 30, status: true},
    {id: 'olya', age: 31, status: false},
    {nameid: 'max', age: 31, status: true}
];
// for (const user of users) {
//     console.log(user)
// }

function lopper(array) {
    for (const item of array) {
        console.log(item)
    }

}
lopper(users)
lopper(users2)