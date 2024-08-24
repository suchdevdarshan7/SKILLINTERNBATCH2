//! Shallow copy :

// let obj = {
//     name: "Somename",
//     age: 12,
// }

// let obj2 = obj;

// obj2.name = "Darshan",
//     console.log(obj)
// console.log(obj2)

//! Deep Copy:

// let obj = {
//     name: "Somename",
//     age: 12,
//     car: {
//         model1: "Lambo",
//         model2: "Ferrari",
//         model3: "GWagon",
//     }
// }

// let obj2 = { ...obj }; //! 1 layer copy

//! Deep copy:

// let obj2 = JSON.parse(JSON.stringify(obj))

// obj2.car.model3 = "Wagonar"


// obj2.name = "Darshan",
//     console.log(obj)
// console.log(obj2)

// let obj = {
//     name: "Somename",
//     someObj: {
//         car: "Maruthi",
//     }
// }

// // let obj2 = { ...obj };
// let obj2 = JSON.parse(JSON.stringify(obj));

// obj2.someObj.car = "Helicopter";
// obj2.name = "Your Name"
// console.log(obj)
// console.log(obj2)