const express = require("express");
const cors = require("cors");

const app = express();
const greetRouter = require("./routes/greet-route");


app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);


app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to Younglabs" });
});
app.use(express.json()); 


app.use("/api/v1", greetRouter);

module.exports = app;
