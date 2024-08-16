// create a server using express
import express from "express";
const app = express();
// create a route for the home page
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api", (req, res) => {
  res.send("Welcome to the Real World!");
});

app.get("/api/webhook", (req, res) => {
  console.log("Webhook called");
  console.log("req.params");
  res.send("Webhook called");
});

// start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
