import { useState } from "react";
import MovieDetails from "../MovieDetails/MovieDetails";

export default function MovieList({ movies }) {
  const [expandedId, setExpandedId] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const toggleDetails = async (id) => {
    if (expandedId === id) {
      setExpandedId(null);
      return;
    }

    try {
      const res = await fetch(`https://www.omdbapi.com/?apikey=20f0101&i=${id}&plot=full`);
      const data = await res.json();
      setSelectedMovie(data);
      setExpandedId(id);
    } catch (error) {
      console.error("Error al obtener detalles:", error);
    }
  };

  if (movies.length === 0) {
    return <p className="text-center text-gray-500">No se encontraron resultados.</p>;
  }

  return (
    <div className="space-y-6">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-4">
          <div className="flex flex-col md:flex-row items-start gap-4">
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "/no-poster.png"}
              alt={movie.Title}
              className="w-full md:w-40 h-auto rounded"
            />
            <div className="flex-1">
              <h2 className="text-xl font-semibold">{movie.Title}</h2>
              <p className="text-gray-600">Año: {movie.Year}</p>
              <button
                onClick={() => toggleDetails(movie.imdbID)}
                className="mt-2 text-green-600 hover:underline"
              >
                {expandedId === movie.imdbID ? "Ocultar detalles" : "Ver más detalles"}
              </button>
              {expandedId === movie.imdbID && selectedMovie?.imdbID === movie.imdbID && (
                <MovieDetails movie={selectedMovie} />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
