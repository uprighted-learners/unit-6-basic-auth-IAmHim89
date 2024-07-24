// Your code goes here
//env initilaization
require("dotenv").config();

//bcrypt initialization
const bcrypt = require("bcrypt");

//express initalization
const express = require("express");

//Express variable call
const app = express();

//call for static files
app.use(express.static(`${__dirname}/public`));

//call for middleware for reading form bodies
app.use(express.urlencoded({ extended: true }));

//Mongoose initalization variable
const mongoose = require("mongoose");
//MongoDb variable Url connection

const MONGODB = process.env.MONGO_DB_URL;

//Mongoose connection via MONGODB
mongoose.connect(MONGODB);

//database variable calling the sync of mongoose via mongodb
const db = mongoose.connection;

const saltRounds = parseInt(process.env.salt, 10);

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  passWord: {
    type: String,
    required: true,
  },
});
const User = mongoose.model("User", userSchema);

//initalization of local browser #
const PORT = process.env.PORT || 5000;

app.post("/login", (req, res) => {});
app.post("/signup", (req, res) => {});
app.get("/dashboard/:username", (req, res) => {});

//Mongoose connection establishment
db.once("open", async () => {
  console.log(`Succesfully connected to \n ${MONGODB}`);
  console.log("*".repeat(10));
});
//local browser Port Call
app.listen(PORT, () => {
  console.log(`Local Conneection connected to: ${PORT}`);
});
