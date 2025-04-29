import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import ProductForm from "./ProductForm";
import { act } from "react";

const mockStore = configureStore([]);

describe("ProductForm", () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore({
      products: {
        products: [],
        searchTerm: "",
        sortKey: "code",
        filteredAndSortedProducts: [],
      },
    });
    store.dispatch = jest.fn(); // Mockear dispatch
  });

  it("debería mostrar un mensaje de error si los campos están vacíos", async () => {
    render(
      <Provider store={store}>
        <ProductForm />
      </Provider>
    );

    const submitButton = screen.getByRole("button", {
      name: "Agregar Producto",
    });

    await act(async () => {
      fireEvent.click(submitButton);
    });

    expect(
      screen.getByText("Por favor, completa todos los campos obligatorios.")
    ).toBeInTheDocument();
  });

  it("debería permitir agregar un producto", async () => {
    render(
      <Provider store={store}>
        <ProductForm />
      </Provider>
    );

    await act(async () => {
      // Simular cambios en los campos del formulario
      fireEvent.change(screen.getByLabelText("Código *"), {
        target: { value: "1" }, // Enviar como string
      });
      fireEvent.change(screen.getByLabelText("Nombre *"), {
        target: { value: "Producto 1" },
      });
      fireEvent.change(screen.getByLabelText("Descripción *"), {
        target: { value: "Descripción del producto" },
      });
      fireEvent.change(screen.getByLabelText("Cantidad *"), {
        target: { value: "10" }, // Enviar como string
      });

      const submitButton = screen.getByRole("button", {
        name: "Agregar Producto",
      });
      fireEvent.click(submitButton);
    });

    // Verificar que el mensaje de error no esté presente
    expect(
      screen.queryByText("Por favor, completa todos los campos obligatorios.")
    ).not.toBeInTheDocument();

    // Verificar que se haya llamado a dispatch con los datos correctos
    expect(store.dispatch).toHaveBeenCalledWith({
      type: expect.any(String), // Verificar que se haya llamado con una acción
      payload: {
        code: 1, // Verificar que el código sea un número
        name: "Producto 1",
        description: "Descripción del producto",
        quantity: 10, // Verificar que la cantidad sea un número
        creation: expect.any(String), // Verificar que se haya agregado la fecha de creación
        image: null, // Verificar que no se haya enviado imagen
      },
    });
  });
});
