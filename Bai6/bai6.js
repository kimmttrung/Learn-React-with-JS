let a = 5;
let b = 10;

console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');
console.log(`Fifteen is ${a+b} and
not ${(2 * a + b)} .`);

// bai tap
const base_url = 'localhost:8080';
const api = 'get-user'; fetch_page = 2;

//output: localhost:8080/get-user?page=2
console.log(`${base_url}/${api}?page=${fetch_page}`);

