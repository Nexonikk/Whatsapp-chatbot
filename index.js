// create a server using express
import express from "express";
const app = express();
// create a route for the home page
app.get("/", (req, res) => {
  res.send("Hello World!");
});
// start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
