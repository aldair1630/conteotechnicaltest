# Gestión de Productos

Una aplicación web para gestionar productos, con funcionalidades como agregar, filtrar, ordenar y eliminar productos. La aplicación incluye optimización de carga, mejoras de accesibilidad y un diseño moderno.

---

## 🚀 Requisitos previos

Asegúrate de tener instalados los siguientes programas en tu máquina:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

---

## 🛠️ Instalación

Sigue estos pasos para instalar y ejecutar el proyecto localmente:

1. Clona este repositorio:

   ```bash
   git clone https://github.com/aldair1630/conteotechnicaltest.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd conteotechnicaltest
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Abre tu navegador y ve a `http://localhost:3000`.

---

## ✨ Funcionalidades principales

- **Agregar productos:** Completa un formulario para agregar productos con nombre, descripción, cantidad, código y una imagen opcional.
- **Filtrar productos:** Filtra productos por nombre, código o cantidad.
- **Ordenar productos:** Ordena productos por código, nombre, cantidad o fecha de creación.
- **Eliminar productos:** Elimina productos de la lista.
- **Persistencia:** Los productos se guardan en `LocalStorage` para que no se pierdan al recargar la página.

---

## 📚 Decisiones técnicas importantes

### 1. **Librerías utilizadas**

- **TypeScript:** Para añadir tipado estático y mejorar la calidad del código.
- **React:** Para construir la interfaz de usuario.
- **Redux Toolkit:** Para manejar el estado global de la aplicación.
- **React Hook Form:** Para manejar formularios de manera eficiente.
- **Tailwind CSS:** Para un diseño moderno y responsivo.
- **LocalStorage:** Para persistir los datos de los productos.
- **Lazy Loading y Dynamic Imports:** Para optimizar la carga de componentes y mejorar el rendimiento.
- **Jest:** Para realizar pruebas unitarias y garantizar la calidad del código.
- **Testing Library:** Para realizar pruebas de componentes React de manera eficiente.
- **ts-jest:** Para integrar Jest con TypeScript.
- **Redux Mock Store:** Para simular el store de Redux en pruebas.
- **Babel:** Para transformar el código moderno de JavaScript y JSX.

### 2. **Manejo del estado**

- El estado global se maneja con **Redux Toolkit**, lo que permite una gestión centralizada de los productos, filtros y ordenación.
- La lógica de filtrado y ordenación se realiza directamente en el slice de Redux para mantener la lógica separada de los componentes.

### 3. **Optimización**

- Se implementó **lazy loading** con `React.lazy` y `Suspense` para cargar los componentes de forma dinámica y reducir el tiempo de carga inicial.

### 4. **Accesibilidad**

- Se agregaron etiquetas `aria-*` y atributos como `role` para mejorar la accesibilidad.
- Los elementos interactivos tienen un enfoque visible (`focus-visible`) para facilitar la navegación con teclado.

### 5. **Diseño UI/UX**

- Se utilizó **Tailwind CSS** para un diseño limpio y moderno.
- Se implementaron mejoras visuales como:
  - Botones con degradados y animaciones.
  - Previsualización estilizada de imágenes.
  - Mensajes de confirmación al agregar o eliminar productos.

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si deseas contribuir:

1. Haz un fork del repositorio.
2. Crea una rama para tu funcionalidad (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz un commit (`git commit -m 'Añadir nueva funcionalidad'`).
4. Haz un push a tu rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.
