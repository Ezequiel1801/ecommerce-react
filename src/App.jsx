import React, { useState } from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";
import products from "./productos";
import CartModal from "./components/CartModal/CartModal";

const App = () => {
  const [carritoVisible, setCarritoVisible] = useState(false);
  const [carrito, setCarrito] = useState([]);

  const abrirCarrito = () => setCarritoVisible(true);
  const cerrarCarrito = () => setCarritoVisible(false);

  const agregarAlCarrito = (producto) => {
    const productoExistente = carrito.find((item) => item.id === producto.id);
    if (productoExistente) {
      const carritoActualizado = carrito.map((item) =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item,
      );
      setCarrito(carritoActualizado);
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  const sumarCantidad = (id) => {
    const carritoActualizado = carrito.map((item) =>
      item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item,
    );

    setCarrito(carritoActualizado);
  };

  const restarCantidad = (id) => {
    const carritoActualizado = carrito
      .map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item,
      )
      .filter((item) => item.cantidad > 0);

    setCarrito(carritoActualizado);
  };

  const cambiarCantidad = (id, nuevaCantidad) => {
    const cantidad = parseInt(nuevaCantidad);

    if (isNaN(cantidad) || cantidad < 1) return;

    const carritoActualizado = carrito.map((item) =>
      item.id === id ? { ...item, cantidad: cantidad } : item,
    );

    setCarrito(carritoActualizado);
  };

  return (
    <div className={styles.container}>
      <Header onAbrirCarrito={abrirCarrito} />
      <CartModal
        visible={carritoVisible}
        carrito={carrito}
        onClose={cerrarCarrito}
        onSumar={sumarCantidad}
        onRestar={restarCantidad}
        onCambiarCantidad={cambiarCantidad}
      />
      <div className={styles.cardsContainer}>
        <div className="d-flex flex-wrap gap-3 justify-content-center">
          {products.map((producto) => (
            <Cards
              key={producto.id}
              producto={producto}
              agregarAlCarrito={agregarAlCarrito}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
