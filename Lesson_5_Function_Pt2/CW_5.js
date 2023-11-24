// const users2 = [
//     {id: 1, name: 'Dima', age: 23},
//     {id: 2, name: 'Sveta', age: 23},
//     {id: 3, name: 'Luci', age: 23},
//     {id: 4, name: 'Roma', age: 23},
//     {id: 5, name: 'Kolya', age: 23},
//     {id: 6, name: 'Kostya', age: 23},
//     {id: 7, name: 'Marina', age: 23},
//     {id: 8, name: 'Yana', age: 23},
//     {id: 9, name: 'Anna', age: 23},
//     {id: 10, name: 'Igor', age: 23}
// ]
//
// aaa(users2); |||||||||||||||||||| Виклик можливий коли функція стоіть так "function aaa  (array) {....."
//
// function aaa  (array) {
//     if (array.length)
//         for (const item of array) {
//             console.log(item)
//         }
//


// aaa(users2);||||||||||||||||||||||||||||| Коли функція стоїть ось так це не можливо "const aaa = function  (array)"
// const aaa = function  (array) {
//     if (array.length)
//         for (const item of array) {
//             console.log(item)
//         }
// }


//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| Приклад стрілочної функції

// const foo3 = (num1, num2) => {
//     return num1 + num2;
// }
//
// console.log(foo3(1, 3))
// console.log(foo3(4, 3))
// console.log(foo3(5, 3))


const users2 = [
    {id: 1, name: 'Dima', age: 23},
    {id: 2, name: 'Sveta', age: 33},
    {id: 3, name: 'Luci', age: 43},
    {id: 4, name: 'Roma', age: 13},
    {id: 5, name: 'Kolya', age: 23},
    {id: 6, name: 'Kostya', age: 43},
    {id: 7, name: 'Marina', age: 23},
    {id: 8, name: 'Yana', age: 63},
    {id: 9, name: 'Anna', age: 27},
    {id: 10, name: 'Igor', age: 28}
];


const foo5 = (arr, cb) => {
    const newArr = [];
    for (const user of arr) {
        if (cb(user)) {
            newArr.push(user);
        }
    }
    return newArr;
}
const conditionFoo = (user) => {
    return user.age > 30
}
const result = (foo5(users2, conditionFoo));


console.log(result)