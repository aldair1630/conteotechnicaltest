import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-blue-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logotipo */}
        <div className="text-2xl font-bold">
          <a href="#" className="hover:text-blue-300">
            Conteo
          </a>
        </div>

        {/* Enlaces de navegación */}
        <ul className="hidden md:flex items-center space-x-6">
          <li className="font-medium hover:text-blue-300">
            <a href="#products">Productos</a>
          </li>
          <li className="font-medium hover:text-blue-300">
            <a href="#add">Agregar Producto</a>
          </li>
          <li className="font-medium hover:text-blue-300">
            <a href="#about">Acerca de</a>
          </li>
        </ul>

        {/* Menú hamburguesa para pantallas pequeñas */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-white hover:text-blue-300 focus:outline-none"
            title="Open menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
