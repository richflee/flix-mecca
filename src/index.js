import express from "express";

const app = express();

app.get("/", function (req, res) {
  res.send("GETTING /");
});

app.listen(3000, function () {
  console.log("NOW RUNNING ON localhost:3000 🎉");
});
