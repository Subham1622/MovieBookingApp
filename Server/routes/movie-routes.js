import express from "express";
import jwt from "jsonwebtoken";
import {
  addMovies,
  getAllMovies,
  searchMovies,
  deleteMovie,
  getMoviesById,
} from "../controllers/movie-controller.js";

// Route logger-middleware
var mobieRouterLogger =(req,res,next)=>{
  console.log('Logged into Movie Route');
  next();
};

const movierouter = express.Router();

movierouter.use(mobieRouterLogger);
movierouter.get("/", getAllMovies);
movierouter.post("/addmovie", addMovies);
movierouter.get("/search", searchMovies);
movierouter.delete("/:id", deleteMovie);
movierouter.get("/:id", getMoviesById);

export default movierouter;
