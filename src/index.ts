import express from "express";
import getMovies from "./api/movies";

const app = express();

app.get("/", function (req, res) {
  res.send("🍿 Coming Soon: an unimaginable amount of movie content 🍿");
});

app.get("/movies", function (req, res) {
  res.send(getMovies(req));
});

app.listen(3000, function () {
  console.log("Flix Mecca running on :3000 🍿");
});
