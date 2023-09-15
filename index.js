require('dotenv').config()
const express = require("express")
const app = express();
const Router = require("./src/routers/index")

port = process.env.PORT;


app.use("/api",Router)

    app.get("/", (req, res) => {
        res.send("Hello world from env")
    })
app.listen(port);