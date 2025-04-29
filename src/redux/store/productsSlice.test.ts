import productsReducer, {
  addProduct,
  deleteProduct,
  setSearchTerm,
} from "./productsSlice";

describe("productsSlice", () => {
  const initialState = {
    products: [],
    searchTerm: "",
    sortKey: "code" as "code" | "name" | "quantity" | "creation",
    filteredAndSortedProducts: [],
  };

  it("debería agregar un producto", () => {
    const newProduct = {
      code: 1,
      name: "Producto 1",
      description: "Descripción del producto",
      quantity: 10,
      creation: "2023-01-01",
      image: null,
    };

    const state = productsReducer(initialState, addProduct(newProduct));
    expect(state.products).toHaveLength(1);
    expect(state.products[0]).toEqual(newProduct);
  });

  it("debería eliminar un producto", () => {
    const initialStateWithProduct = {
      ...initialState,
      products: [
        {
          code: 1,
          name: "Producto 1",
          description: "Descripción",
          quantity: 10,
          creation: "2023-01-01",
          image: null,
        },
      ],
    };

    const state = productsReducer(initialStateWithProduct, deleteProduct(1));
    expect(state.products).toHaveLength(0);
  });

  it("debería actualizar el término de búsqueda", () => {
    const state = productsReducer(initialState, setSearchTerm("Producto"));
    expect(state.searchTerm).toBe("Producto");
  });
});
