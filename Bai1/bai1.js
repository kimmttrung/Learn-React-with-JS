// var: global
// let: khai báo ở đâu dùng ở đấy (has a block scope)
// const: chỉ thay đổi đc trong object và array
var name = 'Hoi Trung';
var age = 19;

const z = 15;
// console.log(">>> check ", z);

const x = {}
x.name = 'Mai Trung';
// x = {name: 'Hi'}; // error
console.log(">>> check" , x)