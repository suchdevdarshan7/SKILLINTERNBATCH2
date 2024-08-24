// key value pair

// name = someone 

// let obj = {
//     Sname: "Somename",
//     age: 15,
//     dept: "cse"
// }

// let {Sname,age,dept} = obj;

// console.log(Sname)
// console.log(age)
// console.log(dept)

// console.log(`the name is ${obj.name} and age is ${obj.age} from the  ${obj.dept} dept`)

// console.log(obj['name'])
// console.log(obj["age"])

// console.log(obj)


//~ Create object using three different ways

//! object literals: 

let obj = {
    name: "somename",
    age: 12,
    dept: 20,
}

//~ Object constructor:

// let object = new Object({name: "Somename",age:122});

// console.log(object)


// function Car(Cname,Cmodel,Price){
//     this.Cname = Cname;
//     this.Cmodel = Cmodel;
//     this.Price = Price;
// }


// let obj2 = new Car("Lambo","Hurracan",153482707);

// console.log(obj2)


//~ iterate over a object : 
// 

// } 

// for (const key in object1) {
//    console.log(object1[key])
// }

// for (const element of object1) {
//     console.log(object1[key])
// }


//! Object.keys()


// let object1 = {
//     name: "Somename",
//     age: 12,
//     dept: "ece",
// } 

// console.log(Object.keys(object1))

// let object1 = {
//     name: "Somename",
//     age: 12,
//     dept: "ece",
// } 

// console.log(Object.values(object1))

// let object1 = {
//     Sname: "Somename",
//     age: 12,
//     dept: "ece",
// } 

// console.log(object1.hasOwnProperty("dept"))

// let object1 = {
//     Sname: "Somename",
//     age: 12,
//     dept: "ece",
// } 

// Object.freeze(object1)

let username = "Sathyan";
let password = "Sathyan123";

let LoginData = {
    username,
    password,
}

console.log(LoginData)

// object1.Sname = "Noname"

// console.log(object1)

// // Object.isFrozen(object1) 

// console.log(Object.isFrozen(object1))

// Object.seal(object1);

// delete object1.Sname 


// console.log(object1)


// let object1 = {
//     Sname: "Somename",
//     age: 12,
//     dept: "ece",
// } 
// console.log(object1)
// object1.Sname = "Apurva Patil";
// object1['age'] = 20;
// console.log(object1)

//  let object1 = {
//     Sname: "Somename",
//     age: 12,
//     dept: "ece",
// } 

// let {Sname,age,dept} = object1;

// delete object1.Sname;

// console.log(object1)