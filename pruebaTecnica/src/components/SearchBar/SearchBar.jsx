import React from "react";

export default function SearchBar({ searchTerm, onSearch, onChange }) {
  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={searchTerm}
        onChange={onChange}
        placeholder="Busca una película"
        className="border px-4 py-2 rounded w-full"
      />
      <button
        onClick={onSearch}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Buscar
      </button>
    </div>
  );
}
