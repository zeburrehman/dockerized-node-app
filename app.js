const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
    let t = true;
    res.status(200).json({
        "message": "Hello World!!!!"
    });
})

app.listen(5000, () => console.log("Server has been started"));