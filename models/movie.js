let movies = [
    {id: '1588323375416', title: 'Star Wars: Episode IX - The Rise of Skywalker', picture:{}, year: 2019, director: 'J.J. Abrams'},
    {id: '1588323390624', title: 'The Irishman', picture:{}, year: 2019, director: 'Martin Scorsese'},
    {id: '1588323412643', title: 'Harry Potter and the Sorcerers Stone',
        picture: {"name": "2016-kia-sportage.jpeg", "path": "http://localhost:3000/public/uploads/2016-kia-sportage.jpeg"},
        year: 2001, director: 'Chris Columbus'}
  ];

const Movie = class {
    constructor(id, title='Default', picture={}, year=2020, director='Default'){
        this.id = id;
        this.title = title;
        this.picture = picture;
        this.year = year;
        this.director = director;
    }

    // for updating movie's data
    mergeMovie(movie) {
        movie.title ? this.title = movie.title : '';
        movie.picture ? this.picture = movie.picture : '';
        movie.year ? this.year = movie.year : '';
        movie.director ? this.director = movie.director : '';
    }

    // for adding a new movie
    parseMovie(obj) {
        obj.id ? this.id = obj.id : '';
        obj.title ? this.title = obj.title : '';
        obj.picture ? this.picture = obj.picture : '';
        obj.year ? this.year = obj.year : '';
        obj.director ? this.director = obj.director : '';
    }
}

const getMovie = (movie) => {
    movie.parseMovie(movies.find(mov => mov.id === movie.id));
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
    return movie;
}

module.exports = {
    getMovies: ()=> {return movies},
    getMovie,
    addMovie,
    updateMovie,
    deleteMovie,
    Movie
}