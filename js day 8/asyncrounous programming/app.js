// let a = 10 ; 

// console.log("Hi")
// console.log(a)
// console.log("hello")


// ! task 1 --> executed quick
//! task2 ==> 2s time  --> go to background
//! task3 ==> executed faster 


// console.log("Hi");

// setTimeout(()=>{
//     console.log("Hello world!")
// },2000)

// console.log("hello")

// let i = 0 ; 

// let TimeInterval = setInterval(()=>{
//     ++i;
//     console.log("I will work again and again "+i)

//     if(i===10){
//         clearInterval(TimeInterval)
//     }
// },1000)

// ! Pyramid of doom or callback hell

// setInterval(()=>{
//     setInterval(()=>{
//         setInterval(()=>{
//             setInterval(()=>{

//             })
//         },3000)
//     },2000)
// },1000)

//! Promises and async await: 


//! JSON object : 

// let obj ='{name: somename, age: someage}'

let obj = '{"name":"John", "age":30, "car":null}'

// console.log(JSON.parse(obj))

// JSON.stringfy();  
// console.log(JSON.parse(obj))


async function fetchApi(){
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();

    console.log(data)
}

fetchApi()