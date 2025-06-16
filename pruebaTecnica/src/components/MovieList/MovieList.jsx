import React from "react";

export default function MovieList({ movies, onSelect }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="bg-white p-4 rounded shadow">
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : "/no-poster.png"}
            alt={movie.Title}
            className="w-full h-60 object-cover"
          />
          <h3 className="text-lg font-semibold mt-2">{movie.Title}</h3>
          <p className="text-sm text-gray-600">Año: {movie.Year}</p>
          <button
            onClick={() => onSelect(movie.imdbID)}
            className="mt-2 text-green-600 underline"
          >
            Ver más detalles
          </button>
        </div>
      ))}
    </div>
  );
}
