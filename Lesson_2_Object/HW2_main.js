// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let massif = ['moon', 'script', 10, -1, 'bad', {name: 'Dima'}, 'age', 'earth', 'pool'];
console.log(massif[0])
console.log(massif[1])
console.log(massif[2])
console.log(massif[3])
console.log(massif[4])
console.log(massif[5])
console.log(massif[6])
console.log(massif[7])
console.log(massif[8])
console.log(massif[9])
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book = [
    {
        title: 'Witcher',
        pageCount: 234,
        genre: 'fantasic',
    },
    {
        title: 'Witcher2',
        pageCount: 234,
        genre: 'fantasic',
    },
    {
        title: 'Witcher',
        pageCount: 234,
        genre: 'fantasic',
    }
]

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book1 = [
    {
        title: 'witcher1',
        pageCount: 223,
        ganre: 'fantastic',
        authors: [
            {name: 'Andjey', age: 64}
        ]
    },
    {
        title: 'witcher2',
        pageCount: 223,
        ganre: 'fantastic',
        authors: [
            {name: 'Andjey', age: 64}
        ]
    },
    {
        title: 'witcher3',
        pageCount: 223,
        ganre: 'fantastic',
        authors: [
            {name: 'Andjey', age: 64}
        ]
    }
];
console.log(book1)

//- Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача

let user = [
    {name: 'Dima', Username: 'Skrin_shot', password: '112323'},
    {name: 'tania', Username: 'Skrin_sh123ot', password: '42123'},
    {name: 'Alina', Username: 'Skrin_s12hot', password: '3234123'},
    {name: 'Marina', Username: 'Skri4n_shot', password: '154323'},
    {name: 'Kostia', Username: 'Skri2n_shot', password: '16723'},
    {name: 'Yana', Username: 'Skr35in_sh3ot', password: '189623'},
    {name: 'Bodia', Username: 'Skri12n_shot', password: '1567423'},
    {name: 'Sveta', Username: 'Skrin_shot', password: '1547823'},
    {name: 'max', Username: 'Skr76in_shot', password: '1256733'},
    {name: 'Roma', Username: 'Skr75in_shot', password: '1657823'},
]
console.log(user[0].password);
console.log(user[1].password);
console.log(user[2].password);
console.log(user[3].password);
console.log(user[4].password);
console.log(user[5].password);
console.log(user[6].password);
console.log(user[7].password);
console.log(user[8].password);
console.log(user[9].password);

//Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
//Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 10;
if (x !== 0) {
    console.log('true')
} else {
    console.log('false');
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 18;
if (time > 45 && time <= 59) {
    console.log('четверту частину години')
} else if (time > 30 && time <= 45) {
    console.log('третю частину години')
} else if (time > 15 && time <= 30) {
    console.log('другу частину години')
} else if (time > 0 && time <= 15) {
    console.log('першу частину години')
}
//- У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 12;
if (day > 0 && day <= 10) {
    console.log('першу декаду')
} else if (day > 10 && day <= 20) {
    console.log('другу декаду')
} else if (day > 20 && day <= 31) {
    console.log('третю декаду')
} else {
    console.log('Wrong day')
}

//- Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається
// інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let day2 = 2;
switch (day2){
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday ')
        break;
    case 3:
        console.log('Wdnesday')
        break;
    case 4:
        console.log('Thursday ')
        break;
    case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Saturday')
        break;
    case 7:
        console.log('Sunday')
        break;
    default:
        console.error('Error')
}

//- Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let a = 1;
let b = 5;
if (a > b) {
    console.log('a:', a);
} else if (b > a) {
    console.log('b:', b);
} else if (b === a){
    console.log('equal');
} else{
    console.error('Error')
}
//- є змінна х, яка може прийняти будь-яке значення
// (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"
// якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let x = '';
let reult = x || 'default';
console.log(result)


//- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".*/

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5){
    console.log('Super!!!')
}
if (coursesAndDurationArray[1].monthDuration > 5){
    console.log('Super!!!')
}
if (coursesAndDurationArray[2].monthDuration > 5){
    console.log('Super!!!')
}
if (coursesAndDurationArray[3].monthDuration > 5){
    console.log('Super!!!')
}
if (coursesAndDurationArray[4].monthDuration > 5){
    console.log('Super!!!')
}
if (coursesAndDurationArray[5].monthDuration > 5){
    console.log('Super!!!')
}


