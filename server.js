const express = require("express");
const connectDatabaseMongoDB = require("./connectDatabase");
const initRouter = require("./server/routes/api");

connectDatabaseMongoDB();

const app = express();
app.use(express.json());
app.use("/", initRouter);

const port = 5000;
app.listen(port, () => {
  console.log(`Connect Server App from ${port} Successfuly`)
})