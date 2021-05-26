const movies = [
    {id: '1588323375416', title: 'Star Wars: Episode IX - The Rise of Skywalker', picture:{}, year: 2019, director: 'J.J. Abrams'},
    {id: '1588323390624', title: 'The Irishman', picture:{}, year: 2019, director: 'Martin Scorsese'},
    {id: '1588323412643', title: 'Harry Potter and the Sorcerers Stone', picture:{}, year: 2001, director: 'Chris Columbus'}
  ];

function Movie (id, title='Default', picture={}, year=2020, director='Default') {
    this.id = id,
    this.title = title,
    this.picture = picture,
    this.year = year,
    this.director = director
}

const getMovie = (movie) => {
    movie = movies.find(mov => mov.id === movie.id);
    return movie;
}

const addMovie = (movie)=>{movies.push(movie)};

const updateMovie = (movie) => {
    const index = movies.findIndex(mov => mov.id === movie.id);
    movies.splice(index, 1, movie);
    return movie;
}

const deleteMovie = (movie) => {
    movies = movies.filter(mov => mov.id !== movie.id);
    return movies;
}

module.exports = {
    getMovies: ()=> {return movies},
    getMovie: getMovie,
    addMovie: addMovie,
    updateMovie: updateMovie,
    deleteMovie: deleteMovie,
    Movie: Movie
}