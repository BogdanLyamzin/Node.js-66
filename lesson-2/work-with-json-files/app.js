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

// invokeMovieAction({action: "getAll"});
// invokeMovieAction({action: "getById", id: "u9kgwNWGi3uUUwh0b8V48"})
// invokeMovieAction({action: "add", title: "Wednesday", director: "Tim Burton"})
// invokeMovieAction({action: "updateById", id: "QvfXNyNCZZqB_m1jREgGX", title: "Wednesday", director: "Tim Burton, James Marshall"});
// invokeMovieAction({action: "deleteById", id: "dx3IGTUdB6uuSskH6OmpN"})
// invokeMovieAction({action: "delete", id: "dx3IGTUdB6uuSskH6OmpN"})