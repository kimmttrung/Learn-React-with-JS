class Person {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    getAddress() {
        return 'I live in ' + this.address;
    }

}

const test = new Person('Trung', "HN");

console.log(">>> check", test);
console.log(">>> check", test.getAddress());

// Inheritance
class Animal {
    constructor() {
    // to do
    }
    doAction() {
    return 'Go Go away';
    }
}

class Dog extends Animal {
    constructor(model) {
    super();
    this.model = model;
    } 
}

const myDog = new Dog("BullDogs");
myDog.doAction();

// Bai Tap
class Novel {
    constructor(Title, Author) {
        this.Title = Title;
        this.Author = Author;
    }
    getAuthor() {
        return this.Author;
    }
}

let myNovel = new Novel('Tôi thấy hoa vàng trên cỏ xanh', "Nguyễn Ngọc Ánh");
console.log(myNovel);
