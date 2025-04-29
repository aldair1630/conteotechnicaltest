import React, { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazy loading de los componentes
const ProductForm = React.lazy(() => import("./components/ProductForm"));
const ProductList = React.lazy(() => import("./components/ProductList"));
const ProductFilter = React.lazy(() => import("./components/ProductFilter"));
const ProductSorter = React.lazy(() => import("./components/ProductSorter"));

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <main className="w-full max-w-6xl mx-auto mt-10 px-4 flex flex-col gap-8">
        <Suspense fallback={<p>Cargando...</p>}>
          <section className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Agregar Producto
            </h2>
            <ProductForm />
          </section>
          <section className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Filtros y Ordenación
            </h2>
            <div className="flex flex-col md:flex-row gap-4">
              <ProductFilter />
              <ProductSorter />
            </div>
          </section>
          <section className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Lista de Productos
            </h2>
            <ProductList />
          </section>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
