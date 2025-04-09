// obejct: k thay doi thu tu
// arr: thay doi thu tu 

// const person = { name: "Eric", age: 26, eyeColor: "black", like: "girl" };
// const name = person.name;
// const age = person.age;
// console.log(name); //Eric
// console.log(age); //26

const person = { name: "Eric", age: 26, eyeColor: "black", like: "girl" };
const { age, name } = person;

console.log(name); //Eric
console.log(age); //26

const city = [ "ha noi", "da nang", "sai gon", "ca mau"];
// old way
// const hanoi = city [0];
// const danang = city [1];
// const hcm = city [2];
//With destructuring:
const [ hanoi, danang, hcm] = city;

console.log(hanoi, danang, hcm);

// bai tap
const react = [
    'facebook', 
    'all-in-one', 
    'javascript'
];
const [, , javascript ] = react;
let tech = javascript;
console.log(tech);

const dev = { salary: 2000, tool : 'laptop', like: 'bugs' };
const {like:trung} = dev;
console.log(trung) //bugs