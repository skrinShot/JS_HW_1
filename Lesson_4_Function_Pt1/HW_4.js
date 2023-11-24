//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function square(a, b) {
    return a * b;
}

console.log(square(2, 10))
console.log(square(4, 12))

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function sCircle(r) {
    return Math.PI * r * r;
}

console.log(sCircle( 3));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function sCylider(r, h) {
    return (2 * Math.PI * r * r) + (2 * Math.PI * r * h);
}

console.log(sCylider(3, 15));

// - створити функцію яка приймає масив та виводить кожен його елемент

function logger(arr) {
    for (const item of arr) {
        console.log('item:', item);
        
    }

}

logger([ 123, 534, true, 'Dima']);
logger([ true, false]);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function  pCreator(text) {
    document.write('<p>${text}</p>');
}
pCreator('qwe qwe qwe');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function  ulCreator1(text) {
    document.write('<ul>')
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');

}
ulCreator1('qwe qwe qwe');
ulCreator1('qwe qwe qwe');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function  ulCreator2(text, count) {
    document.write('<ul>')
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');

}
ulCreator2('qwe qwe qwe', 1);
ulCreator2('qwe qwe qwe', 2);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function  ulCreator3(arr) {
    document.write('<ul>')
    for (const item of arr){
        document.write(`<li>${item}</li>`);
    }
    document.write('</ul>');

}
ulCreator3(['text', 'asd', 123, true, false]);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

const users = [
    {id: 1, name: 'Dima', age: 32},
    {id: 2, name: 'petya', age: 32},
    {id: 3, name: 'anna', age: 12},
    {id: 4, name: 'Kolya', age: 42},
    {id: 5, name: 'Kostya', age: 32},
    {id: 6, name: 'masha', age: 22},
    {id: 7, name: 'roma', age: 54},
    {id: 8, name: 'Lyci', age: 11}
]
function userPresenter() {
    for (const user of users) {
        document.write(`<div>
                        <p>${user.id}</p>
                        <p>${user.name}</p>
                        <p>${user.age}</p>
                        </div>`);
    }
    
}
userPresenter(users)

// - створити функцію яка повертає найменьше число з масиву
function minNumber(arrOfNumber) {
    let min = arrOfNumber[0];
    for (let i = 1; i < arrOfNumber.length; i++) {
        if (arrOfNumber[i] < min){
            min = arrOfNumber[i];
        }
    }
    return min;
}

console.log('minNumber: ' , minNumber([1, 5, 54, -1, 20, -24, -45]));


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

function sum(arrOfNums) {
    let result = 0;

    for (let i = 0; i < arrOfNums.length; i++) {
        result = result + arrOfNums[i];
    }

    return result;
}

console.log('sum: ' , sum([1, -4, 7]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2){
    const numIndex1 = arr[index1];
    const numIndex2 = arr[index2];

    arr[index1] = numIndex2;
    arr[index2] = numIndex1;

    return arr;
}

console.log(swap([11, 22, 33, 44], 0, 1));
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250


function exchange(sum, curencies, resultCurrency) {
    for (const cur of curencies) {
        if (cur.currency === resultCurrency)
        return sum / cur.value
    }

}

const result = (exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));
console.log('result:', result)