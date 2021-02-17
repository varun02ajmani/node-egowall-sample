const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send("Welcome to the EgoWall Test Pipeline Home Page Version 4.0");
})

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log("version 2.0");
});

