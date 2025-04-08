let person = {name: 'Trung', age: 19}

const person1 = {
    firstName:"Eric", 
    lastName:"HoiDanIT", 
    age:26, 
    eyeColor:"black"};

const person3 = ["Eric", "HoiDanIT", 26]; // array -> chi so index

console.log(">>> name ", person1.firstName)
console.log(">>> name ", person1["firstName"])
console.log(">>> name ", person3[2])


let React = {
    language: 'javascript', 
    author:'facebook'
};

let tutorial = {
    name: "React Tutorial",
    author: "HoiDanIT vs Eric",
    language: "javascript"
   };

alert(tutorial.name);