//! built in modules

const fs = require('fs');

//! synchrounous methods and asynchrounous

// fs.writeFileSync('./test.txt', 'I am trying to rewrite my file!', 'utf-8');


// fs.writeFile('./text.txt', 'I am the best node js developer in the world', 'utf-8', (err, data) => {
//     if (err)
//         console.log('Unexpected error occured');

//     console.log('Data written succesfully !')

// })


// const data = fs.readFileSync('./test.txt', 'utf-8');

// console.log(data)


// fs.readFile('./tex.txt', 'utf-8', (err, data) => {
//     if (err)
//         console.log(err.message)

//     console.log(data)
// })

// fs.readFile('./test.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err.message)
//         return;
//     }
//     fs.readFile('./text.txt', 'utf-8', (err2, data2) => {
//         if (err2) {
//             console.log(err.message)
//             return;
//         }
//         fs.writeFile('./text.txt', `${data} ${data2}`, (error) => {
//             if (error) {
//                 console.log(error.message)
//             }
//             console.log('Data written succesfully')
//         })

//     })

// })





//! third party modules

//! user defined