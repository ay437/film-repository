const express = require("express");
const router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get("/", function(req, res) {
  res.render("index", { title: "Express" });
});

router.post("/film-information", async (req, res) => {
  const { name } = req.body;

  const filmRequest = axios.get(`https://www.omdbapi.com/?apikey=1062f492&t=${name}`)
  .then(({ data }) => data)
  .catch((error) => console.log(error))

  const filmData = await filmRequest;

  const { Title, Released, Runtime, Genre, Director, Actors, Plot, Language, Poster, imdbRating } = filmData;

  res.render("filmInformation", {
    name,
    Title,
    Released,
    Runtime,
    Genre,
    Director,
    Actors,
    Plot,
    Language,
    Poster,
    imdbRating
  });
});

module.exports = router;

