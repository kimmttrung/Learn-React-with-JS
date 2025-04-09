// thao tac object: obj ?.a ?.b // undefined
// thao tac object: obj ?.a ?.b ?? 'not found'
// thao tac function: obj.func?.()
// ?.[]


let user = {};
console.log(user?.address?.streest ?? 'not found user');

let userAdmin = {
    admin() {
        alert("I am Eric");
    }
};

let userGuest = { };

userGuest.admin(); // lieu admin co ton tai k trong userGuest
userAdmin.admin?.(); 

