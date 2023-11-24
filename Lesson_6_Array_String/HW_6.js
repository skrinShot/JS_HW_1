// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let pass1_1 = 'hello world';
let pass1_2 = 'lorem ipsum';
let pass1_3 = 'javascript is cool';


console.log(pass1_1.toUpperCase());
console.log(pass1_2.toUpperCase());
console.log(pass1_3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let pass2_1 = 'HELLO WORLD'
let pass2_2 = 'LOREM IPSUM'
let pass2_3 = 'JAVASCRIPT IS COOL'

console.log(pass2_1.toLowerCase())
console.log(pass2_2.toLowerCase())
console.log(pass2_3.toLowerCase())


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.


let str = ' dirty string   ';
console.log(str.substring(1, 12));


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str1 = 'Ревуть воли як ясла повні';
let tupleArray = str1.split(' ')
console.log(tupleArray)

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити
// всі об'єкти в масиві на стрінгові.

let numb = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let stringArr = numb.map(String);
let resultString = stringArr.join(', ');
console.log(resultString)

// - створити функцію sortNums(direction), яка прймає масив чисел,
// та сортує його від більшого до меньшого, або навпаки в залежності від
// значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

function sortNums(nums, direction) {
    if (direction === 'ascending') {
        nums.sort(function (a, b) {
            return a - b;
        });
    } else if (direction === 'descending') {
        nums.sort(function (a, b) {
            return b - a;
        });
    } else {
        return nums;
    }

    return nums;

}

let nums = [11,21,3];
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));

//- є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

console.log(coursesAndDurationArray.sort(function (a, b) {
    return b.monthDuration - a.monthDuration
}));

let morFiveMonth = coursesAndDurationArray.filter(
    function (courses){
        return courses.monthDuration > 5;
    }
);
console.log(morFiveMonth)




















