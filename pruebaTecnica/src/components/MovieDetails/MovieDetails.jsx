import Loader from "../Loader.jsx/Loader";

export default function MovieDetails({ movie, isLoading }) {
  if (isLoading) {
    return (
      <div className="mt-4 flex justify-center items-center h-24">
        <Loader />
      </div>
    );
  }

  if (!movie) {
    return null;
  }

  return (
    <div className="mt-4 pt-4 border-t border-gray-200 space-y-3 text-sm text-gray-700">
      <p><strong className="text-gray-800">Género:</strong> {movie.Genre}</p>
      <p><strong className="text-gray-800">Duración:</strong> {movie.Runtime}</p>
      <p><strong className="text-gray-800">Clasificación:</strong> {movie.Rated}</p>
      <p><strong className="text-gray-800">Director:</strong> {movie.Director}</p>
      <p><strong className="text-gray-800">Actores:</strong> {movie.Actors}</p>
      <p><strong className="text-gray-800">Premios:</strong> {movie.Awards}</p>
      <p>
        <strong className="text-gray-800">Sinopsis:</strong>{" "}
        <span className="leading-relaxed">{movie.Plot}</span>
      </p>
    </div>
  );
}