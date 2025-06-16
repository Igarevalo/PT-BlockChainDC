// src/components/SearchBar/SearchBar.jsx
export default function SearchBar({ searchTerm, onChange, onSearch }) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 p-4 bg-white shadow-lg rounded-lg">
      <input
        type="text"
        value={searchTerm}
        onChange={onChange}
        onKeyDown={handleKeyDown} 
        placeholder="Buscar película por título..."
        className="px-5 py-3 rounded-full border border-gray-300 shadow-sm w-[600px] focus:outline-none focus:ring-3 focus:ring-indigo-500 focus:border-transparent text-lg transition-all duration-300 ease-in-out"
      />
      <button
        onClick={onSearch}
        className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-3 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Buscar
      </button>
    </div>
  );
}