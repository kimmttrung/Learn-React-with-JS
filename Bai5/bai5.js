/// map: k lam thay doi array
// ben trong map la fuction

const myArray = ['apple', 'banana', 'orange'];
const myList = myArray.map((item) => `<p>${item}</p>)`); // jsx

// console.log(myList, myArray)

const myArray1 = [1,2,3,4 ];
const myList1 = myArray1.map((item)=>{
    // console.log(item)
    return item*2
});

// console.log(myList1)

/// Filter, map: toi uu code
const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);
// function checkAdult(age) {
//     return age >= 18;
// }

const res = ages.filter((item) => {
    console.log(item)
    return item > 18;
});

console.log(res)