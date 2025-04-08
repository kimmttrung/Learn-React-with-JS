const firstArr = [1, 2, 3];
const secondArr = [4, 5, 6];
const arr3 = [...firstArr, ...secondArr];
const arr4 = [...secondArr, ...firstArr];

console.log(arr3)

const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
}
const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
}

// object: overide
const update = {...myVehicle, ...updateMyVehicle};
console.log(update);

const state = {
    name: 'Trung',
    age: 19
}

const update2 = {...state, age: 20}
console.log(update2);

// bai tap
function sum(x, y, z) {
    return x + y + z;
   }
const numbers = [1, 2, 3];
console.log(sum(...numbers));// 6