const express = require("express");

const {connectMongoDb} = require('./connection');
const {logReqRes} = require("./middlewares");

const userRouter = require("./routes/user")
 
const app = express();
const PORT = 8000;

// Connection
connectMongoDb("mongodb://127.0.0.1:27017/youtube-app-1")
  .then(() => console.log("MongoDb connected!"))

//Middleware - plugin
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));

//test middleware
app.use((req, res, next) => {
  console.log("middleware");
  next();
});


//Rest API

// app.get('/api/users/:id', (req, res) => {
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);
//     return res.json(user);
// })

// app.patch("/api/users/:id", (req, res) => {
//     //TODO: edit the user with id
//     return res.json({status: "pending"});
// })

// app.delete("/api/users/:id", (req, res) => {
//     //TODO: delete the user with id
//     return res.json({status: "pending"});
// })

//Routes

app.use("/api/users", userRouter);

app.listen(PORT, () => console.log("Server started at PORT: " + PORT));