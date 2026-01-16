const express = require("express");

const connectDb = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req, res) => {
    const user = new User({
        firstName: "Kajal",
        lastName: "Sinha",
        email: "Kajal@gmail.com",
        password: "Kajal@123",
    });
    await user.save();
    res.send("Data is saved successfully");
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
