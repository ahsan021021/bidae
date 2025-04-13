const mongoose = require("mongoose");

exports.connect = () => {
  const uri = "mongodb://admin:12345678@localhost:27017/bidmanpro?authSource=admin"; // Replace with your MongoDB URI

  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    authSource: 'admin', // Specifies the database for authentication
  });

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function () {
    console.log("connected to MongoDB");
  });
};
