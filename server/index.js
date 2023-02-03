const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require('dotenv').config()

const app = express();
const PORT_NUM = 8080;

mongoose.set('strictQuery', true);
app.use(cors());

app.listen(PORT_NUM,  async () => {
    await mongoose.connect(process.env.MONGO_API_KEY);
    console.log("Server Started, Listening on Port "+ PORT_NUM);
});

app.get("/", (req, res) => {
    console.log("logged");
    res.json({test:"klflkaf"});
    console.log({hi:"test"});
});