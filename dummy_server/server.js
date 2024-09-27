const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send("Welcome hi from the backend ")
})

app.post('/form', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})

app.listen(3000, () => {
    console.log('The server is running on port 3000')
})