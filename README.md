# PC Components Store

E-commerce de componentes de PC gamer desarrollado con React y Vite.

## 🎯 Objetivo del proyecto

Aplicación web interactiva que permite explorar un catálogo de hardware y periféricos (Procesadores, Motherboards, Gráficas y Monitores), gestionar productos en un carrito de compras interactivo, modificar cantidades en tiempo real y calcular el total de la orden.

## 🔗 Enlaces

- **Repositorio en GitHub:** [https://github.com/Ezequiel1801/ecommerce-react](https://github.com/Ezequiel1801/ecommerce-react)

## 🛠️ Tecnologías utilizadas

- **React** (Componentes funcionales y Hooks)
- **Vite** (Entorno de desarrollo y bundler)
- **JavaScript (ES6+)**
- **Bootstrap** (Estructura y layout responsive)
- **CSS Modules** (Estilos modulares y desacoplados)
- **Git / GitHub** (Control de versiones)

## ⚙️ Cómo ejecutar el proyecto localmente

bash
# 1. Clonar el repositorio
git clone https://github.com/Ezequiel1801/ecommerce-react.git

# 2. Entrar a la carpeta
cd ecommerce-react

# 3. Instalar dependencias
npm install

# 4. Iniciar el servidor de desarrollo
npm run dev

🚀 Funcionalidades principales

Catálogo dinámico: Carga de productos desde una fuente de datos local.
Componentes modulares: Tarjetas de productos reutilizables mediante props.
Carrito en modal: Interfaz superpuesta para revisar la compra sin abandonar la navegación.
Gestión de cantidades: Controles para sumar (+), restar (-) o ingresar cantidades manualmente.
Control de duplicados: Si el producto ya se encuentra en el carrito, se incrementa su cantidad sin repetir la entrada.
Cálculo automático: Cálculo del total acumulado en tiempo real.
Diseño responsive: Adaptación a pantallas móviles y de escritorio mediante Bootstrap y media queries.

🧩 Arquitectura de componentes

Header: Barra de navegación principal que incluye el branding y el botón con contador para desplegar el modal del carrito.
Cards / CardItem: Componente reutilizable que recibe el objeto de producto mediante props y emite el evento para agregarlo al carrito.
CartModal: Componente modal que renderiza la lista de ítems seleccionados, los controles de cantidad y el resumen del total.

🧠 Estado y lógica técnica (useState)

Manejo de estados:
carrito: Array de objetos que almacena los productos seleccionados junto con su propiedad cantidad.
carritoVisible: Booleano que controla la visibilidad (apertura/cierre) del modal.

Lógica implementada:
agregarAlCarrito: Evalúa si el ítem ya existe en el estado con .some() o .find(). Si existe, actualiza su propiedad cantidad; si no, lo inserta con cantidad: 1.
restarCantidad: Reduce la cantidad en 1. Si la cantidad alcanza 0, remueve el elemento del array con .filter().
cambiarCantidad: Sincroniza el valor numérico ingresado manualmente desde el input con el estado del carrito.
calcularTotal: Itera el estado mediante .reduce() calculando acumulador + (item.precio * item.cantidad).
Renderizado de listas: Uso del método .map() con asignación de atributos key únicos basados en los identificadores de cada elemento.

👤 Autor
Ezequiel Carrizo
