const express = require('express');
const router = require("../course/Router");
var path = require('path');
const app = express();
const movies = require('../course/models/movie');
let Movie = movies.Movie;

const port = 3000;
const base = 'http://localhost';

app.set('base', `${base}:${port}`);

app.use('/api', router);
app.use('/public/uploads',express.static(path.join(__dirname, 'public/uploads')));

let movie1 = new Movie();
movie1.id = '12345';
movie1.title = 'Doraemon';

movies.addMovie(movie1);
console.table(movies.getMovies());


app.listen(port, ()=>console.log(`Server has been started and listening on port ${port}`));