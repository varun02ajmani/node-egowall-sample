const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send("Welcome to the home page");
})
app.listen(3000, () => {
    console.log("version 2.0");
});

