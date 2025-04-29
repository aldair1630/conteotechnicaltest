import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { deleteProduct } from "../redux/store/productsSlice";

const ProductList: React.FC = () => {
  const products = useSelector(
    (state: RootState) => state.products.filteredAndSortedProducts
  );
  const dispatch = useDispatch();

  return (
    <ul className="space-y-4" aria-label="Lista de productos">
      {products.map((product) => (
        <li
          key={product.code}
          className="p-4 bg-white border border-gray-200 rounded-md shadow-sm flex justify-between items-center"
          role="listitem"
        >
          <div>
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-600">
              <strong>Descripción:</strong> {product.description}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Cantidad:</strong> {product.quantity}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Código:</strong> {product.code}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Fecha de creación:</strong>{" "}
              {new Date(product.creation).toLocaleDateString("es-ES")}
            </p>
            {product.image && (
              <img
                src={product.image}
                alt={`Imagen del producto ${product.name}`}
                className="mt-2 w-32 h-32 object-cover rounded-md"
              />
            )}
          </div>
          <button
            onClick={() => dispatch(deleteProduct(product.code))}
            className="delete-button focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            aria-label={`Eliminar el producto ${product.name}`}
          >
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
