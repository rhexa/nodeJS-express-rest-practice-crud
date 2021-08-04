# nodeJS-express-rest-practice-crud
Practicing basic RESTful web service CRUD operation on nodeJS using expressJS

## Available API
- Read All Movies   = get   /api/movies
- Read Movie by ID  = get   /api/movies/:id
- Add Movie         = post  /api/movies
    {
        id,
        title,
        picture: {
            name,
            path '*temporary path from upload api*'
        },
        year,
        director
    }
- Update Movie      = put   /api/movies/:id
    {
        title,
        picture: {
            name,
            path
        },
        year,
        director
    }
- Delete Movie      = delete    /api/movies/:id