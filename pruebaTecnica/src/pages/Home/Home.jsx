import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader.jsx/Loader";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = async (query) => {
    if (query.trim() === '') {
      setMovies([]);
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      // Reemplaza 'YOUR_API_KEY' con tu clave de API de OMDb
      const res = await fetch(`https://www.omdbapi.com/?apikey=20f0101&s=${query}`);
      const data = await res.json();

      if (data.Response === 'True') {
        setMovies(data.Search);
      } else {
        setMovies([]);
        setError(data.Error || 'No se encontraron películas.');
      }
    } catch (err) {
      console.error("Error al buscar películas:", err);
      setError('Hubo un problema al buscar las películas. Intenta de nuevo más tarde.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    fetchMovies(searchTerm);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-indigo-800 tracking-tight sm:text-5xl lg:text-6xl">
          📽️ Buscador de Películas
        </h1>
        <p className="mt-3 text-lg text-gray-600">Encuentra tus películas favoritas al instante.</p>
      </header>

      <main className="max-w-6xl mx-auto">
        <SearchBar
          searchTerm={searchTerm}
          onChange={handleSearchChange}
          onSearch={handleSearchClick}
        />

        {isLoading && <Loader />}
        {error && (
          <p className="text-center text-red-500 text-lg font-medium py-8">{error}</p>
        )}
        {!isLoading && !error && <MovieList movies={movies} />}
      </main>
    </div>
  );
}
