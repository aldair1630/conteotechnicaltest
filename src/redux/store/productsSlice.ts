import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  code: number;
  name: string;
  description: string;
  quantity: number;
  creation: string;
  image?: string | null; // Campo opcional para la imagen
}

interface ProductsState {
  products: Product[];
  searchTerm: string;
  sortKey: "code" | "name" | "quantity" | "creation";
  filteredAndSortedProducts: Product[];
}

// Funciones para manejar LocalStorage
const loadFromLocalStorage = (): Product[] => {
  const data = localStorage.getItem("products");
  return data ? JSON.parse(data) : [];
};

const saveToLocalStorage = (products: Product[]) => {
  localStorage.setItem("products", JSON.stringify(products));
};

// Función para filtrar y ordenar productos
const filterAndSortProducts = (
  products: Product[],
  searchTerm: string,
  sortKey: "code" | "name" | "quantity" | "creation"
): Product[] => {
  return products
    .filter((product) => {
      // Convertimos el término de búsqueda a minúsculas para comparación
      const lowerCaseSearchTerm = searchTerm.toLowerCase();

      // Filtrar por código, nombre o cantidad
      return (
        product.name.toLowerCase().includes(lowerCaseSearchTerm) || // Filtrar por nombre
        product.code.toString().includes(lowerCaseSearchTerm) || // Filtrar por código
        product.quantity.toString().includes(lowerCaseSearchTerm) // Filtrar por cantidad
      );
    })
    .sort((a, b) => {
      // Ordenar por la clave seleccionada
      if (sortKey === "creation") {
        return new Date(a.creation).getTime() - new Date(b.creation).getTime();
      }
      return a[sortKey] > b[sortKey] ? 1 : -1;
    });
};

// Estado inicial
const initialState: ProductsState = {
  products: loadFromLocalStorage(),
  searchTerm: "",
  sortKey: "code",
  filteredAndSortedProducts: [], // Se inicializa vacío
};

// Slice de Redux
const productsSlice = createSlice({
  name: "products",
  initialState: {
    ...initialState,
    filteredAndSortedProducts: filterAndSortProducts(
      initialState.products,
      initialState.searchTerm,
      initialState.sortKey
    ), // Inicializamos con los productos ya cargados
  },
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
      saveToLocalStorage(state.products); // Guardar en LocalStorage
      state.filteredAndSortedProducts = filterAndSortProducts(
        state.products,
        state.searchTerm,
        state.sortKey
      );
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (product) => product.code !== action.payload
      );
      saveToLocalStorage(state.products); // Guardar en LocalStorage
      state.filteredAndSortedProducts = filterAndSortProducts(
        state.products,
        state.searchTerm,
        state.sortKey
      );
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
      state.filteredAndSortedProducts = filterAndSortProducts(
        state.products,
        state.searchTerm,
        state.sortKey
      );
    },
    setSortKey: (
      state,
      action: PayloadAction<"code" | "name" | "quantity" | "creation">
    ) => {
      state.sortKey = action.payload;
      state.filteredAndSortedProducts = filterAndSortProducts(
        state.products,
        state.searchTerm,
        state.sortKey
      );
    },
  },
});

export const { addProduct, deleteProduct, setSearchTerm, setSortKey } =
  productsSlice.actions;
export default productsSlice.reducer;
