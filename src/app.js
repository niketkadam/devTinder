const express = require("express");

const connectDb = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.send();
  } catch (error) {
    res.status(400).send("error in saving");
  }
});

connectDb()
  .then(() => {
    console.log("database connected successfully");
    app.listen(3001, () => {
      console.log("Server is running on port 3001");
    });
  })
  .catch((err) => {
    console.log("database not connected");
  });
