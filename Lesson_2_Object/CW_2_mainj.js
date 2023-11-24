let bands = [
    'acdc', //0 Любий рахунок починається з "0"
    'pink floyd', //1
    'steve vai', //2
    'shinedown', //3
];
console.log(bands); //Повний верелік групи "Bands" "let bands..."
console.log(bands[0]) //Перелік по номеру

let musicFolder = [
    //    0        1       2    3
    ['queen', 'acdc', 'pf', 'dp'], // 0
    //  0         1         2
    ['eminem', '2pac', 'public enemy'],
    // 0      1      2
    ['awd', 'sds', 'zxc'],
]

console.log(musicFolder.length) //lenght=довжина
console.log(musicFolder[0][0])  // Звертання до бокового масива "[0]" і потім до другог
                                // масива "[0]" тобто до queen

let user = {
    id: 1,
    name: 'vasya',
    age: 34,
    status: true,
}

console.log(user); // Зверненя напряму до "user"
console.log(user.id); // Зверненя напряму до "id" яке знаходится в "user"
console.log(user.age); // Зверненя напряму до "age" яке знаходится в "user"


