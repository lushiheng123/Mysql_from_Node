const express = require("express");
const getDataConnection = require("./api/getData");  //其实就是使用connection
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 3002;
app.use(cors());
app.get("/data", (req, res) => {
  const query = "SELECT * FROM chat_data";
  getDataConnection.query(query, (err, results, fields) => {
    if (err) {
      console.error("Error connecting to database:", err);
      res.status(500).json({ error: "Error querying database" });
      return;
    }
    res.json(results);
  });
});



app.listen(port, () => {
  console.log("server is running");
});
