import React from "react";

export default function MovieDetails({ movie, onClose }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-2">{movie.Title} ({movie.Year})</h2>
        <img src={movie.Poster} alt={movie.Title} className="mb-4 w-full" />
        <p><strong>Género:</strong> {movie.Genre}</p>
        <p><strong>Duración:</strong> {movie.Runtime}</p>
        <p><strong>Clasificación:</strong> {movie.Rated}</p>
        <p className="mt-2"><strong>Sinopsis:</strong> {movie.Plot}</p>
        <button onClick={onClose} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">Cerrar</button>
      </div>
    </div>
  );
}
