const movieService = require("./movies");

const invokeMovieAction = async({action, id, title, director}) => {
    switch(action) {
        case "getAll":
            const allMovies = await movieService.getAllMovies();
            console.log(allMovies);
            break;
        case "getById":
            const oneMovie = await movieService.getMovieById(id);
            console.log(oneMovie);
            break;
        case "add":
            const newMovie = await movieService.addMovie({title, director});
            console.log(newMovie);
            break;
        case "updateById":
            const updateMovie = await movieService.updateMovieById(id, {title, director});
            console.log(updateMovie);
            break;
        case "deleteById":
            const deleteMovie = await movieService.deleteById(id);
            console.log(deleteMovie);
            break;
        default: 
            console.log("Unknown action")
    }
}

const actionIndex = process.argv.indexOf("--action");
if(actionIndex !== -1) {
    const action = process.argv[actionIndex + 1];
    invokeMovieAction({action});
}