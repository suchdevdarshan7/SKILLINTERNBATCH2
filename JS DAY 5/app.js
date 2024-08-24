let imageOne = 1;
let imageTwo = 2; 
let imageThree = 3; 

let images = ['1','2','3'];

// ! It is a collection of homogoneous and hetrogenous elements : 

//! homongenous : 
// let numbers = [1,2,3,4,5,6];
// console.log(numbers)

//! heterogenous : 
// let user1 = ['Darshan',"darshu@goodBoy.com",17,"male",true,["a","b"]]
// console.log(user1)

// ! index counting starts from 0
// ! if we want to calculate the size then we should start counting from 1
//! if size = n ; lastIndex = n - 1 ; 

// let colors = ["red","green","blue"];
//              // 0      1      2

// console.log(colors[colors.length-1])
// console.log(colors.length)

let colors = ["red","blue","green","yellow","pink","crimson","navy","dodgerblue"];

function callback(element,index,array){
    console.log(element,index,array)
}

colors.forEach(callback);


// for(let i = 0 ; i<colors.length;i++){
//     console.log(colors[i])
// }




