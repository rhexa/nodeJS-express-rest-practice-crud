const movies = [
    {id: '1588323375416', title: 'Star Wars: Episode IX - The Rise of Skywalker', year: 2019, director: 'J.J. Abrams'},
    {id: '1588323390624', title: 'The Irishman', year: 2019, director: 'Martin Scorsese'},
    {id: '1588323412643', title: 'Harry Potter and the Sorcerers Stone', year: 2001, director: 'Chris Columbus'}
  ];

// let Movie = {
//     id: '',
//     title: '',
//     year: 2020,
//     director: 'Default'
// }

// function Movie (id, title, year=2020, director='Default') {
//     this.id = id,
//     this.title = title,
//     this.year = year,
//     this.director = director

//     let getId = ()=> {
//         return this.id;
//     };
//     let setId = (id)=> {
//         this.id = id;
//     };
//     let getTitle = () => {
//         return this.title;
//     };
//     let setTitle = (title) => {
//         this.title = title;
//     };
// }

function Movie (id, title, year=2020, director='Default') {
    
    let getId = ()=> {
        return this.id;
    };
    let setId = (id)=> {
        this.id = id;
    };
    let getTitle = () => {
        return this.title;
    };
    let setTitle = (title) => {
        this.title = title;
    };
    let getYear = () => {
        return this.year;
    }
    let setYear = (year) => {
        this.year = year;
    }
    let getDirector = () => {
        return this.director;
    }
    let setDirector = (director) => {
        this.director = director;
    }
    
    setId(id);
    setTitle(title);
    setYear(year);
    setDirector(director);
}


module.exports = {
    getMovies: ()=> {return movies},
    addMovie: (Movie)=>{movies.push(Movie)},
    Movie: Movie
}