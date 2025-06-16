import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader.jsx/Loader";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const lastSearch = localStorage.getItem("lastSearch");
    if (lastSearch) {
      setSearchTerm(lastSearch);
      fetchMovies(lastSearch);
    }
  }, []);

  const fetchMovies = async (query) => {
    setLoading(true);
    try {
      const res = await fetch(`https://www.omdbapi.com/?apikey=20f0101&s=${query}`);
      const data = await res.json();
      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (err) {
      console.error("Error al buscar películas:", err);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  const searchMovies = () => {
    if (!searchTerm) return;
    localStorage.setItem("lastSearch", searchTerm);
    fetchMovies(searchTerm);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-6">🎬 Buscador de Películas</h1>
      <SearchBar
        searchTerm={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onSearch={searchMovies}
      />
      {loading ? <Loader /> : <MovieList movies={movies} />}
    </div>
  );
}
