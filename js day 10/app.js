// let p1 = new Promise((response, rejected) => {
//     rej("I am working ")
// }).catch((data) => {
//     console.log(data)
// })

// console.log(p1)

// function fetchApi() {
//     fetch("https://fakestoreapi.com/products").then((res) => res.json()).then((data) => console.log(data))
// }

// fetchApi()


// function renderContent(element) {
//     const html = `
//       <div class="box">
//             <h1>${element.title}</h1>
//             <img src=${element.image} alt="">
//             <p>${element.price} $</p>

//         </div>
//     `

//     container.innerHTML += html;
// }



const container = document.querySelector('.container');
const renderContent = (element) => {

    let box = `
        <div class="box">
            <h3>${element.name}</h3>
            <h2>${element.username}</h2>
            <h3>${element.email}</h3> 
        </div>
    `
    container.innerHTML += box;

}

async function whateverName() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json()
    console.log(data)

    data.map((element) => {
        renderContent(element)
    })

}

whateverName()