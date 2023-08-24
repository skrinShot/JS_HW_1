// let x = 0;
// x = x + 10;
// x += 10; скорочена версія 'x = x + 10'


//let a = 0;
//let b = a++; спочатку  змінна b впитує змінну а яка дорівнює нулю
//console.log(b); b = 0

//let a = 0;
//let b = ++a; спочатку змінна а питує сама себе та збыльшуэться на одиницю.
//console.log(b); b = 1

// console.log(імя масиву.length); length - довжина. Команда яка называэ кількість обєктів

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині


for (let i = 1; i <= 10; i++) {
    document.write('<div>Це блок № ' + i + ' c довільним текстом всередині</div>')
}


//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 1; i <= 10; i++) {
    document.write('<div>Блок № ' + i + ' c довільним текстом всередині. Індекс ' + i + '</div>')
}


//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let index = 1;

while (index <= 20) {
    document.write('<h1>вивести в документ ' + index + '  c довільним текстом всередині.</h1>')
    index++;
}

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let user = 1;
while (user <= 20) {
    document.write('<h1>Блок № ' + user + ' c довільним текстом всередині. Та індексом ' + user + '</h1>')
    user++;
}

// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write('<ul>');
for (let i = 0; i < listOfItems.length; i++) {
    document.write('<li> html </li>');
    document.write('<li> css </li>');
    document.write('<li> javascript </li>');
    document.write('<li> mysql </li>');
    document.write('<li> mongodb </li>');
    document.write('<li> react </li>');
    document.write('<li> angular </li>');
    document.write('<li> node.js </li>');
    listOfItems++;
}
document.write('</ul>');

//Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

// <div class="product-card">
//         <h3 class="product-title">TITLE. Price - PRICE</h3>
//         <img src="IMAGE" alt="" class="product-image">
// </div>

document.write('<div class="product-list">');
for (let i = 0; i < products.length; i++) {
    document.write(`
    <div class="product-card">
      <h3 class="product-title">${products[i].title}. Price - ${products[i].price}</h3>
      <img src="${products[i].image}" alt="" class="product-image">
    </div>
  `);
}
document.write('</div>');


//за допомоги циклу вивести:
//  - користувачів зі статусом true
//  - користувачів зі статусом false
//  - користувачів які старші за 30 років

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

//  - користувачів зі статусом true
document.write('<h3>Користувачі зі статусом true:</h3>');
for (let i = 0; i < users.length; i++) {
    if (users[i].status === true) {
        document.write(`<p>${users[i].name}, ${users[i].age} років</p>`);
    }
}

//  - користувачів зі статусом false

document.write('<h3>Користувачі зі статусом false:</h3>');
for (let i = 0; i < users.length; i++) {
    if (users[i].status === false) {
        document.write(`<p>${users[i].name}, ${users[i].age} років</p>`);
    }
}

//  - користувачів які старші за 30 років
document.write('<h3>Користувачі зі статусом false:</h3>');
for (let i = 0; i < users.length; i++) {
    if (users[i].age > 30) {
        document.write(`<p>${users[i].name}, ${users[i].age} років</p>`);
    }
}



