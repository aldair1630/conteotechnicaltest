import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { setSearchTerm } from "../redux/store/productsSlice";

const ProductFilter: React.FC = () => {
  const dispatch = useDispatch();
  const currentSearchTerm = useSelector(
    (state: RootState) => state.products.searchTerm
  );
  const [localSearchTerm, setLocalSearchTerm] = useState(currentSearchTerm);

  const handleFilter = () => {
    dispatch(setSearchTerm(localSearchTerm)); // Actualizar el estado global
  };

  return (
    <div className="flex-1">
      <label
        htmlFor="search"
        className="block text-sm font-medium text-gray-700"
      >
        Buscar por nombre
      </label>
      <div className="flex gap-2">
        <input
          type="text"
          id="search"
          value={localSearchTerm}
          onChange={(e) => setLocalSearchTerm(e.target.value)} // Actualizar el estado local
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Buscar productos..."
        />
        <button
          onClick={handleFilter}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Filtrar
        </button>
      </div>
    </div>
  );
};

export default ProductFilter;
