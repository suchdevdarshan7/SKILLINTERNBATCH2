const express = require('express');

const app = express();
const cors = require('cors')


app.use(cors())

app.use(express.json())


let courses = [
    {
        id: 1,
        courseName: "Javascript for beginners",
        author: "Darshan",
        price: 10000,
    },
    {
        id: 2,
        courseName: "Backend Development using node js and express",
        author: "Darshan",
        price: 14000,
    },
    {
        id: 3,
        courseName: "React Js Mastery course",
        author: "Darshan",
        price: 20000,
    }

]

app.get('/', (req, res) => {
    res.send('<h1>Hello welcome to my page</h1>')
})


app.get('/courses', (req, res) => {
    res.send(courses)
})


app.post('/courses', (req, res) => {
    let course = { id: courses.length + 1, ...req.body }

    courses.push(course);

    res.send('The course has been succesfully added')
})

// app.delete('/courses', (req, res) => {


//     res.send(ans)

// })


app.listen(5000, () => {
    console.log('The server is running in port 5000')
})


console.log(app);