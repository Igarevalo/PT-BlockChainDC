export default function SearchBar({ searchTerm, onChange, onSearch }) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
      <input
        type="text"
        placeholder="Buscar una película..."
        value={searchTerm}
        onChange={onChange}
        className="border border-gray-300 rounded px-4 py-2 w-full sm:w-80"
      />
      <button
        onClick={onSearch}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        Buscar
      </button>
    </div>
  );
}
