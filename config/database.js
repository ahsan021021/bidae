const mongoose = require("mongoose");

exports.connect = () => {
  const uri = "mongodb+srv://root:root@cluster0.4y3vjsz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // Replace with your MongoDB URI

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
