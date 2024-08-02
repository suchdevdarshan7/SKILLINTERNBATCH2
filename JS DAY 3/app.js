// condition ?  "True Block": "False Block"

// ! 0 null undefined "" false --> Falsy values

// let number = 100;

// if(!false){
//     console.log("Truthy value")
// }
// else{
//     console.log("Falsy value")
// }


// * two numbers find the greatest : 

// let number1 = 100;
// let number2 = 20;

// if(number1>number2){
//     console.log(number1+" is greater")
// }
// else{
//     console.log(number2+" is greatest")
// }

// ! three number find the greatest : 


// let number1 = 1000; 
// let number2 = 200; 
// let number3 = 30;

// if(number1>number2 && number1>number3){
//     console.log(number1+" is the largest number")
// }
// else if(number2>number1 && number2>number3){
//     console.log(number2+" is the largest number")
// }
// else{
//     console.log(number3+" is the largest number")
// }


// number =4 ; 
// number1 = 200;

// console.log(`The number is good number ${number*number1}`)

// console.log("The largest number is ${number*number1}")


//! Output methods :

// console.log("Hello world!")

// document.write("I can write whatever i want")

// document.writeln("This also works perfectly")
// document.writeln("This also works perfectly")


// let value  =  alert("Do you want to continue to this malicious website")


// let value = confirm("Are you above 18 !")

// console.log(value )


// let number1 = Number(prompt("Enter a number 1"));

// let number2 = Number(prompt("Enter a number 2"))

// console.log(typeof number1)
// console.log(typeof number2)

// let sum = number1 + number2;

// console.log(sum)


// let num = Number(prompt("Enter a number"))

// let number = parseInt(prompt("Enter a number"));

// console.log(num,typeof num)
// console.log(number,typeof number)


// let NormalNumber = parseInt(prompt('Enter a number'))
// let number = parseFloat(prompt("Enter the number"))

// console.log(NormalNumber,typeof NormalNumber)
// console.log(number,typeof number)


// let a = 10;
// let b = "2";

// let c = a + b;
// let d = b - a; 
// let e = a ** b; 

// console.log(c); //1020
// console.log(d); // 10
// console.log(e); // 200


// console.log(typeof typeof 10)
//           typeof "Number"    


let number = Number(prompt("Enter the day"))

switch (number) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
    default:
        console.log("Invalid Day")
        break;
            
}
