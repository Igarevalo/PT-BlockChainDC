import { useState } from "react";
import MovieDetails from "../MovieDetails/MovieDetails";

export default function MovieList({ movies }) {
  const [expandedId, setExpandedId] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isLoadingDetails, setIsLoadingDetails] = useState(false); 

  const toggleDetails = async (id) => {
    if (expandedId === id) {
      setExpandedId(null);
      setSelectedMovie(null);
      return;
    }

    setIsLoadingDetails(true);
    try {
      const res = await fetch(`https://www.omdbapi.com/?apikey=20f0101&i=${id}&plot=full`);
      const data = await res.json();
      setSelectedMovie(data);
      setExpandedId(id);
    } catch (error) {
      console.error("Error al obtener detalles:", error);
    } finally {
      setIsLoadingDetails(false);
    }
  };

  if (movies.length === 0) {
    return (
      <p className="text-center text-gray-500 text-xl font-medium py-12">
        No se encontraron resultados. Intenta con otra búsqueda.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
      {movies.map((movie) => (
        <div
          key={movie.imdbID}
          className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out overflow-hidden flex flex-col group"
        >
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : "/no-poster.png"}
            alt={movie.Title}
            className="w-[400px] h-[400px] object-cover transition-transform duration-300 group-hover:scale-105 rounded-xl"
          />
          <div className="p-5 flex flex-col flex-grow">
            <h2 className="text-xl font-bold text-gray-800 mb-2 leading-tight">{movie.Title}</h2>
            <p className="text-gray-600 text-sm mb-4">Año: {movie.Year}</p>
            <button
              onClick={() => toggleDetails(movie.imdbID)}
              className="mt-auto self-start text-indigo-600 hover:text-indigo-800 font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-md px-3 py-1"
            >
              {expandedId === movie.imdbID ? "Ocultar detalles" : "Ver más detalles"}
            </button>
            {expandedId === movie.imdbID && selectedMovie?.imdbID === movie.imdbID && (
              <MovieDetails movie={selectedMovie} isLoading={isLoadingDetails} />
            )}
            {expandedId === movie.imdbID && isLoadingDetails && (
              <div className="text-center mt-4">
                <div className="w-8 h-8 border-3 border-indigo-300 border-dashed rounded-full animate-spin mx-auto"></div>
                <p className="text-sm text-indigo-400 mt-2">Cargando detalles...</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}