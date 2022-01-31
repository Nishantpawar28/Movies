import Header from "./components/header/Header";
import "./App.css";
import { movies } from "./MoviesData";
import MovieCard from "./components/movieCard/MovieCard";
import {useEffect, useState} from "react";
import Filter from "./components/filter/Filter";
import Pagination from "./components/pagination/Pagination";

const App = () => {

  const moviesPerPage = 10;
  const [pageNumber, setPageNumber] = useState(0);
  const moviesVisited = pageNumber * moviesPerPage;
  const [Movies, setMovies] = useState(movies);
  const [filter, setFilter] = useState({genres: [], actors: []});
  const pageCount = Math.ceil(Movies.length / moviesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const actors = new Set(
    movies.reduce((acc, movie) => [...movie.actors, ...acc], [])
  );

  const genres = new Set(
    movies.reduce((acc, movie) => [...movie.genres, ...acc], [])
  );

  function handleActorChange(selectedActors) {
    setFilter({...filter, actors: selectedActors});
  }

  function handleGenreChange(selectedGenres) {
    setFilter({...filter, genres: selectedGenres});
  }

  useEffect(() => {
    const filteredMovies = movies.filter((movie) => {
      return (filter.actors.length === 0 || filter.actors.some((actor) => movie.actors.includes(actor))) &&
          (filter.genres.length === 0 || filter.genres.some((genre) => movie.genres.includes(genre)));
    });
    setMovies(filteredMovies);
  }, [filter]);

  return (
    <>
      <Header />
      <div className="hero">
        <div className="filter-container">
          <Filter
            data={[...actors]}
            placeholder="Select actors"
            handleFilterChange={handleActorChange}
          />
          <Filter
            data={[...genres]}
            placeholder="Select genres"
            handleFilterChange={handleGenreChange}
          />
        </div>

        <div className="movies-container">
          <div className="movie-cards">
            {Movies.slice(moviesVisited, moviesVisited + moviesPerPage).map(
              (movie) => (
                <MovieCard
                  key={movie.title}
                  title={movie.title}
                  posterURL={movie.posterurl}
                  rating={movie.imdbRating}
                  releaseDate={movie.releaseDate}
                />
              )
            )}
          </div>
          <Pagination pageCount={pageCount} changePage={changePage} />
        </div>
      </div>
    </>
  );
};

export default App;
