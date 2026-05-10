const express = require("express");

const connectDb = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  const user = new User(req.body);
  console.log("BODY:", req.body);
  try {
    await user.save();
    res.send();
  } catch (error) {
    res.status(400).send("error in saving");
  }
});
// Get the user from mail
app.get("/user", async (req, res) => {
  const userEmail = req.body.email;
  console.log(userEmail);
  try {
    const users = await User.find({ email: userEmail });
    if (users.length === 0) {
      res.status(404).send("User not found");
    } else {
      res.send(users);
    }
  } catch (err) {
    res.status(400).send("somerthing wenrt wrong");
  }
});

app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(400).send("something went wrong");
  }
});
// Delete the user from the database
app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  try {
    const user = await User.find;
  } catch (err) {
    res.status(400).send("something went wrong");
  }
});

app.patch("/user/:id", async (req, res) => {
  const userId = req.params?.id;
  const data = req.body;
  try {
    await User.findByIdAndUpdate({ _id: userId }, data);
    res.send("User updated successfully");
  } catch (error) {
    res.status(400).send("something went wrong");
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
