import { useState, useEffect } from "react";
import "./App.css";

import {
  Header,
  MovieList,
  FavoriteMoviesList,
  AddToFavoritesBtn,
  RemoveFromFavoritesBtn,
} from "./components";

const LOCAL_STORAGE_KEY =
  import.meta.env.VITE_LOCAL_STORAGE_KEY || "movies:favorites";
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

const testData = [
  {
    Title: "Star Wars: Episode IV - A New Hope",
    Year: "1977",
    imdbID: "tt0076759",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
  },
  {
    Title: "Star Wars: Episode V - The Empire Strikes Back",
    Year: "1980",
    imdbID: "tt0080684",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Star Wars: Episode VI - Return of the Jedi",
    Year: "1983",
    imdbID: "tt0086190",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Star Wars: Episode VII - The Force Awakens",
    Year: "2015",
    imdbID: "tt2488496",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
  },
  {
    Title: "Star Wars: Episode I - The Phantom Menace",
    Year: "1999",
    imdbID: "tt0120915",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Star Wars: Episode III - Revenge of the Sith",
    Year: "2005",
    imdbID: "tt0121766",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg",
  },
  {
    Title: "Star Wars: Episode II - Attack of the Clones",
    Year: "2002",
    imdbID: "tt0121765",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
  },
  {
    Title: "Rogue One: A Star Wars Story",
    Year: "2016",
    imdbID: "tt3748528",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg",
  },
  {
    Title: "Star Wars: Episode VIII - The Last Jedi",
    Year: "2017",
    imdbID: "tt2527336",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg",
  },
  {
    Title: "Star Wars: Episode IX - The Rise of Skywalker",
    Year: "2019",
    imdbID: "tt2527338",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg",
  },
];

function App() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async () => {
    const url = `https://www.omdbapi.com/?apikey=${API_KEY}&type=movie&s=${searchValue}`;
    await fetch(url)
      .then((res) => res.json())
      .then((result) => setMovies(result.Search));
  };

  // * FAVORITES

  const loadFavoriteMovies = () => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) setFavorites(JSON.parse(saved));
  };

  const setFavoritesAndSave = (newFavoriteList) => {
    setFavorites(newFavoriteList);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newFavoriteList));
  };

  const addToFavorites = (movie) => {
    const newFavoriteList = [...favorites, movie];
    setFavoritesAndSave(newFavoriteList);
  }

  const removeFavoriteById = (id) => {
    console.log("remove", id)
    const newFavoriteList = favorites.filter(
      (favorite) => favorite.imdbID !== id
    );
    setFavoritesAndSave(newFavoriteList);
  };

  useEffect(() => {
    loadFavoriteMovies();
  }, []);
  
  useEffect(() => {
    getMovieRequest();
  }, [searchValue]);

  return (
    <div className="App">
      <Header setSearchValue={setSearchValue} />
      <FavoriteMoviesList
        movies={favorites}
        removeFromFavorites={RemoveFromFavoritesBtn}
        handleFavoriteClick={removeFavoriteById}
      />
      <MovieList
        movies={movies}
        addToFavoritesBtn={AddToFavoritesBtn}
        handleFavoriteClick={addToFavorites}
      />
    </div>
  );
}

export default App;
