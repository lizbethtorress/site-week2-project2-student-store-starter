const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

// const storeRouter = require("./routes/store")
const app = express()

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// app.use("./", storeRouter)

module.exports = app
