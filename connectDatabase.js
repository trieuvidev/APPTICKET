const mongoose = require("mongoose");

const connectDatabaseMongoDB = () => {
  return mongoose.connect("mongodb://localhost:27017/app-ticket-car", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => console.log("Connect Database MongoDB Successfuly"))
    .catch(console.log("Error Connect Database MongoDB"))
};

module.exports = connectDatabaseMongoDB;