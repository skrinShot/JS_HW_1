

//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)


function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
    const users = [
       new User(1, 'Dima', 'Chornous', 'sad123@gmail.com', '+3804321412'),
       new User(2, 'Dima', 'Chornous', 'sad123@gmail.com', '+3804321412'),
       new User(3, 'Dima', 'Chornous', 'sad123@gmail.com', '+3804321412'),
       new User(4, 'Dima', 'Chornous', 'sad123@gmail.com', '+3804321412'),
       new User(5, 'Dima', 'Chornous', 'sad123@gmail.com', '+3804321412'),
       new User(6, 'Dima', 'Chornous', 'sad123@gmail.com', '+3804321412'),
       new User(7, 'Dima', 'Chornous', 'sad123@gmail.com', '+3804321412'),
       new User(8, 'Dima', 'Chornous', 'sad123@gmail.com', '+3804321412'),
       new User(9, 'Dima', 'Chornous', 'sad123@gmail.com', '+3804321412'),
       new User(10, 'Dima', 'Chornous', 'sad123@gmail.com', '+3804321412'),
    ];

console.log(users)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

const filteredUsers = users.filter((user) => !(user.id % 2));

console.log(filteredUsers)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

const sortUsers = filteredUsers.sort((a, b) => a.id - b.id);

console.log(sortUsers)



// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client


function Client(id, name, surname , email, phone, order) {
    User.call(id, name, surname , email, phone);
    this.order = order;
}

const client = [
    new Client(1, 'Dima', 'Chornous', 'sad123@gmail.com', '+3804321412', 'aplle, milk, orange'),
    new Client(2, 'Dima', 'Chornous', 'sad123@gmail.com', '+3804321412','aplle, milk, orange'),
    new Client(3, 'Dima', 'Chornous', 'sad123@gmail.com', '+3804321412','aplle, milk, orange'),
    new Client(4, 'Dima', 'Chornous', 'sad123@gmail.com', '+3804321412','aplle, orange'),
    new Client(5, 'Dima', 'Chornous', 'sad123@gmail.com', '+3804321412','aplle, milk, orange'),
    new Client(6, 'Dima', 'Chornous', 'sad123@gmail.com', '+3804321412','aplle, milk'),
    new Client(7, 'Dima', 'Chornous', 'sad123@gmail.com', '+3804321412','aplle, milk, orange'),
    new Client(8, 'Dima', 'Chornous', 'sad123@gmail.com', '+3804321412','aplle, milk, orange'),
    new Client(9, 'Dima', 'Chornous', 'sad123@gmail.com', '+3804321412','aplle, milk'),
    new Client(10, 'Dima', 'Chornous', 'sad123@gmail.com', '+3804321412','aplle, milk, orange'),
];


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)


const sortOrder = client.sort((a, b) => a.order.length - b.order.length);

console.log(sortOrder)


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(Model, producer, year, maxSpeed, volume) {
    this.Model = Model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
    
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
    
}

const car1 = new Car('x5', 'BMW', 2010, 110, 5.3)













// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку