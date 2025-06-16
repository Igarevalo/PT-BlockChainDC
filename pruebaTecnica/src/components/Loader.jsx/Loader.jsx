export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] py-12">
      <div className="w-16 h-16 border-4 border-indigo-500 border-dashed rounded-full animate-spin"></div>
      <p className="mt-4 text-indigo-600 font-semibold text-lg">Cargando películas...</p>
    </div>
  );
}