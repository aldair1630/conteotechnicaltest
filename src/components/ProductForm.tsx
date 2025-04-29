import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/store/productsSlice";

interface ProductFormValues {
  code: number;
  name: string;
  description: string;
  quantity: number;
  image?: File; // Imagen opcional
}

const ProductForm: React.FC = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductFormValues>();
  const [imagePreview, setImagePreview] = useState<string | null>(null); // Para previsualizar la imagen

  const onSubmit: SubmitHandler<ProductFormValues> = (data) => {
    const newProduct = {
      ...data,
      code: Number(data.code), // Convertir a número
      quantity: Number(data.quantity), // Convertir a número
      creation: new Date().toISOString(),
      image: imagePreview, // Guardar la URL de la imagen si existe
    };
    dispatch(addProduct(newProduct));
    reset();
    setImagePreview(null); // Limpiar la previsualización de la imagen
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.result) {
          setImagePreview(reader.result as string); // Guardar la imagen como base64
        }
      };

      reader.readAsDataURL(file); // Convertir la imagen a base64
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
      aria-label="Formulario para agregar productos"
    >
      {/* Mostrar errores globales */}
      {Object.keys(errors).length > 0 && (
        <p className="text-red-500" role="alert">
          Por favor, completa todos los campos obligatorios.
        </p>
      )}
      <div>
        <label
          htmlFor="code"
          className="block text-sm font-medium text-gray-700"
        >
          Código *
        </label>
        <input
          type="number"
          id="code"
          {...register("code", { required: true })}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          aria-required="true"
        />
      </div>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Nombre *
        </label>
        <input
          type="text"
          id="name"
          {...register("name", { required: true })}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          aria-required="true"
        />
      </div>
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Descripción *
        </label>
        <textarea
          id="description"
          {...register("description", { required: true })}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          aria-required="true"
        ></textarea>
      </div>
      <div>
        <label
          htmlFor="quantity"
          className="block text-sm font-medium text-gray-700"
        >
          Cantidad *
        </label>
        <input
          type="number"
          id="quantity"
          {...register("quantity", { required: true })}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          aria-required="true"
        />
      </div>
      <div>
        <label
          htmlFor="image"
          className="block text-sm font-medium text-gray-700"
        >
          Imagen (opcional)
        </label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          aria-describedby="image-description"
        />
        <p id="image-description" className="text-sm text-gray-500">
          Puedes subir una imagen opcional para el producto.
        </p>
        {imagePreview && (
          <div className="mt-4">
            <img
              src={imagePreview}
              alt="Previsualización de la imagen"
              className="w-32 h-32 object-cover rounded-md shadow-md border border-gray-300"
            />
          </div>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Agregar Producto
      </button>
    </form>
  );
};

export default ProductForm;
