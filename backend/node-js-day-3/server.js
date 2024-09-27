const express = require('express');
const app = express();
const router = require('./routes/courses.routes');

app.use('/', router); ``



app.listen(3000, () => {
    console.log('The server is running in port 3000');
})