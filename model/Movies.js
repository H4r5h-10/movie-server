import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    userEmail: String,
    movieTitle: String,
    moviePosterPath: String,
    movieId: Number,
    movieType: String,
});

const Movie = mongoose.model("Movie", Schema);

export default Movie;