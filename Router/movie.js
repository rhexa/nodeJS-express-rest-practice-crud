const express = require("express");
const movies = require("../models/movie");
const Movie = movies.Movie;
const fs = require("fs");
const { uploadPicture } = require("../models/picture");
const router = express.Router({ mergeParams: true });

// get all
router.get("/", (req, res) => {
  res.json(movies.getMovies());
});

// get by id
router.get("/:id", (req, res) => {
  const id = req.params.id;

  let movie = new Movie(id);

  res.json(movies.getMovie(movie));
});

// add new movie
router.post("/", async (req, res) => {
  const picture = req.body.picture;
  const movie = new Movie();
  movie.id = req.body.id;
  req.body.title ? (movie.title = req.body.title) : "";
  req.body.year ? (movie.year = req.body.year) : "";
  req.body.director ? (movie.director = req.body.director) : "";

  if (picture) {
    try {
      movie.picture = await uploadPicture(picture, req);
    } catch (error) {
      console.log(error);
    }
  }
  movies.addMovie(movie);
  res.json(movie);
});

// update
router.put("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Hello from put, your id is : ${id}`);
});

// delete
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Hello from delete, your id is : ${id}`);
});

// add new picture
router.post("/uploadpicture", async (req, res) => {
  try {
    const value = req.body.id;
    if (!req.files) {
      console.log("file is required");

      res.send({
        status: 400,
        message: "No file uploaded",
      });
    } else {
      //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
      let picture = req.files.picture;
      console.log(req.files);

      //Use the mv() method to place the file in upload directory (i.e. "uploads")
      //   picture.mv("./public/uploads/" + picture.name);
      console.log("file successfully uploaded");

      //send response
      res.send({
        status: true,
        message: "File is uploaded",
        data: {
          id: value,
          name: picture.name,
          tempFilePath: picture.tempFilePath,
          mimetype: picture.mimetype,
          size: picture.size,
        },
      });
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
