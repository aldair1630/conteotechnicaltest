import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { setSortKey } from "../redux/store/productsSlice";

const ProductSorter: React.FC = () => {
  const dispatch = useDispatch();
  const sortKey = useSelector((state: RootState) => state.products.sortKey);

  return (
    <div className="flex-1">
      <label htmlFor="sort" className="block text-sm font-medium text-gray-700">
        Ordenar por
      </label>
      <select
        id="sort"
        value={sortKey}
        onChange={(e) =>
          dispatch(
            setSortKey(
              e.target.value as "code" | "name" | "quantity" | "creation"
            )
          )
        } // Actualización del estado global
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="code">Código</option>
        <option value="name">Nombre</option>
        <option value="quantity">Cantidad</option>
        <option value="creation">Fecha de creación</option>
      </select>
    </div>
  );
};

export default ProductSorter;
