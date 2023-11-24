// let users = [
//     {name: 'Dima', Username: 'Skrin_shot', password: '112323'},
//     {name: 'tania', Username: 'Skrin_sh123ot', password: '42123'},
//     {name: 'Alina', Username: 'Skrin_s12hot', password: '3234123'},
//     {name: 'Marina', Username: 'Skri4n_shot', password: '154323'},
//     {name: 'Kostia', Username: 'Skri2n_shot', password: '16723'},
//     {name: 'Yana', Username: 'Skr35in_sh3ot', password: '189623'},
//     {name: 'Bodia', Username: 'Skri12n_shot', password: '1567423'},
//     {name: 'Sveta', Username: 'Skrin_shot', password: '1547823'},
//     {name: 'max', Username: 'Skr76in_shot', password: '1256733'},
//     {name: 'Roma', Username: 'Skr75in_shot', password: '1657823'},
// ];
//
// for (let i = 0; i < users.length; i++){
//     console.log(users[i].password);
// }
// Якщо потрібно перебрати певні діапазони масиву потрібно вікористовувати for
//        for (let i = 0; i < users.length; i++){
// //     console.log(users[i].password);

// let users = [
//     {name: 'Dima', Username: 'Skrin_shot', password: '112323'},
//     {name: 'tania', Username: 'Skrin_sh123ot', password: '42123'},
//     {name: 'Alina', Username: 'Skrin_s12hot', password: '3234123'},
//     {name: 'Marina', Username: 'Skri4n_shot', password: '154323'},
//     {name: 'Kostia', Username: 'Skri2n_shot', password: '16723'},
//     {name: 'Yana', Username: 'Skr35in_sh3ot', password: '189623'},
//     {name: 'Bodia', Username: 'Skri12n_shot', password: '1567423'},
//     {name: 'Sveta', Username: 'Skrin_shot', password: '1547823'},
//     {name: 'max', Username: 'Skr76in_shot', password: '1256733'},
//     {name: 'Roma', Username: 'Skr75in_shot', password: '1657823'},
// ];
//
//     for (let user of users){
//         console.log(user)
//     }
//Якщо потрібно перебрати весь масив цикл for of

// let users = [
//     {name: 'Dima', Username: 'Skrin_shot', password: '112323'},
//     {name: 'tania', Username: 'Skrin_sh123ot', password: '42123'},
//     {name: 'Alina', Username: 'Skrin_s12hot', password: '3234123'},
//     {name: 'Marina', Username: 'Skri4n_shot', password: '154323'},
//     {name: 'Kostia', Username: 'Skri2n_shot', password: '16723'},
//     {name: 'Yana', Username: 'Skr35in_sh3ot', password: '189623'},
//     {name: 'Bodia', Username: 'Skri12n_shot', password: '1567423'},
//     {name: 'Sveta', Username: 'Skrin_shot', password: '1547823'},
//     {name: 'max', Username: 'Skr76in_shot', password: '1256733'},
//     {name: 'Roma', Username: 'Skr75in_shot', password: '1657823'}
// ];
// for (const user of users) {
//     for (const fieldName in user) {
//         console.log(fieldName, user[fieldName])
//     }
//     console.log('')
// }
// for in

let users = [
    {name: 'Dima', Username: 'Skrin_shot', password: '112323'},
    {name: 'tania', Username: 'Skrin_sh123ot', password: '42123'},
    {name: 'Alina', Username: 'Skrin_s12hot', password: '3234123'},
    {name: 'Marina', Username: 'Skri4n_shot', password: '154323'},
    {name: 'Kostia', Username: 'Skri2n_shot', password: '16723'},
    {name: 'Yana', Username: 'Skr35in_sh3ot', password: '189623'},
    {name: 'Bodia', Username: 'Skri12n_shot', password: '1567423'},
    {name: 'Sveta', Username: 'Skrin_shot', password: '1547823'},
    {name: 'max', Username: 'Skr76in_shot', password: '1256733'},
    {name: 'Roma', Username: 'Skr75in_shot', password: '1657823'}
];
let i = 0;
while (i < users.length) {
    let user = users[i];
    console.log(user);
    i++;
}
// Замість цикла for є цикл while

