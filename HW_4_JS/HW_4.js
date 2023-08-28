//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// calculate Rectangle Area - обчислити площу прямокутника
function calculateRectangleArea(a, b) {
    if (a <= 0 || b <= 0) {
        return ('Сторони повинні бути більші за нуль');
    }

    const area = a * b;
    return area;
}

// Приклад повного рішення з данними сторін а = 3, в = 5(приклад для себе взятий зі стороніх ресурсів)

// function calculateRectangleArea(a, b){
//     if (a <= 0 || b <= 0) {
//         return('Сторони повинні бути більші за нуль');
//     }
//
//     const area = a * b;
//     return area;
// }
//
// const sideA = 3;
// const sideB = 5;
// const rectangleArea = calculateRectangleArea(sideA, sideB);
//
// console.log(rectangleArea)

//- створити функцію яка обчислює та повертає площу кола з радіусом r

// calculate Circle Area - обчислити площу кола
function calculateCircleArea(r) {
    if (r <= 0) {
        return ('сторони повинні бути більші за нуль');
    }
    const area = Math.PI + r + r;
    return area;
}


//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// calculate Cylinder Surface Area - Обчислити площу поверхні циліндра

function calculateCylinderSurfaceArea(h, r) {
    if (h <= 0 || r <= 0) {
        return ('Висота та радіус повинні бути більші за нуль')
    }
    const lateralArea = 2 * Math.PI * r * h;
    const baseArea = Math.PI * r * r;
    const surfaceArea = 2 * baseArea + lateralArea;

    return surfaceArea
}

//- створити функцію яка приймає масив та виводить кожен його елемент

function printNameElements(name) {
    for (let i = 0; i < name.length; i++) {
        console.log(name[i]);
    }
}

const myName = ['Dima', 'Olya', 'Tanya', 'Lyci'];
printNameElements(myName);

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

function createParagraph(text) {
    const paragraph = document.createElement('p')
    paragraph.textContent = text;
    return paragraph;
}

const Text1 = "Текст задати через аргумент";
const paragraphElement = createParagraph(Text1)


document.body.appendChild(paragraphElement);


//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createSemeText(text) {
    const ul = document.createElement('ul')

    for (let i = 0; i < 3; i++) {
        const li = document.createElement('li')
        li.textContent = text;
        ul.appendChild(li);
    }
    return ul;
}

const listItemText = "Текст li задати через аргумент всім однаковий"
const listElements = createSemeText(listItemText);

document.body.appendChild(listElements);


//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

//

function createSemeText1(text, count) {
    const ul = document.createElement('ul')

    for (let i = 0; i < count; i++) {
        const li = document.createElement('li');
        li.textContent = text;
        ul.appendChild(li);
    }
    return ul;
}

const listItemText1 = "Текст li задати через аргумент всім однаковий.";
const itemCount = 3;


const listElement = createSemeText1(listItemText1, itemCount);

document.body.appendChild(listElement);


//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function creatListArray(array) {
    const ul = document.createElement('ul')

    for (let i = 0; i < array.length; i++){
        const li = document.createElement('li')
        li.textContent = array[i];
        ul.appendChild(li)
    }
    return ul;

}

const Array = [2, "hello", "Dima", 0.5, true];
const listElement1 = creatListArray( Array)

document.body.appendChild(listElement1);



