const express = require("express");
const cors = require("cors");

const app = express();
const greetRouter = require("./routes/greet-route");


app.use(
  cors({
    origin: process.env.FRONTEND_URL,
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
// module.exports = (req, res) => {
//     app(req, res);
//   };
