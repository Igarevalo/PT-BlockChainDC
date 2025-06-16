export default function MovieDetails({ movie }) {
  return (
    <div className="mt-4 border-t pt-4 space-y-2 text-sm text-gray-700">
      <p><strong>Género:</strong> {movie.Genre}</p>
      <p><strong>Duración:</strong> {movie.Runtime}</p>
      <p><strong>Clasificación:</strong> {movie.Rated}</p>
      <p><strong>Sinopsis:</strong> {movie.Plot}</p>
    </div>
  );
}
