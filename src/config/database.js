const mongoose = require("mongoose");

const connectDb = async () => {
  await mongoose.connect(
    "mongodb+srv://namastedev:YlM2OZc9GaL5Xfg5@namastenode.nrgur8c.mongodb.net/devTinder"
  );
};

module.exports = connectDb
