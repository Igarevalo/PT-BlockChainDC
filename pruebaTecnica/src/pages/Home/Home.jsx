import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import MovieDetails from "../../components/MovieDetails/MovieDetails";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const API_KEY = "20f0101"; 

  const searchMovies = async () => {
    if (!searchTerm) return;
    const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`);
    const data = await res.json();
    if (data.Search) {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }
  };

  const fetchMovieDetails = async (id) => {
    const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`);
    const data = await res.json();
    setSelectedMovie(data);
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Buscador de Películas</h1>
      <SearchBar
        searchTerm={searchTerm}
        onSearch={searchMovies}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <MovieList movies={movies} onSelect={fetchMovieDetails} />
      {selectedMovie && (
        <MovieDetails movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  );
}
