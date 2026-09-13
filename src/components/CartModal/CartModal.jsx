import { useState } from "react";
import styles from "./cartModal.module.css";

const CartModal = ({
  visible,
  carrito,
  onClose,
  onSumar,
  onRestar,
  onCambiarCantidad,
}) => {
  if (!visible) return null;
  const total = carrito.reduce(
    (acc, producto) => acc + producto.precio * producto.cantidad,
    0,
  );

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2>Tu Carrito</h2>
          <button className={styles.closeBtn} onClick={onClose}>
            X
          </button>
        </div>

        <div className={styles.body}>
          {carrito.length === 0 ? (
            <p>El carrito está vacío</p>
          ) : (
            carrito.map((producto) => (
              <div key={producto.id} className={styles.item}>
                <img src={producto.imagen} alt={producto.nombre} />
                <div>
                  <h5>{producto.nombre}</h5>
                  <p>${producto.precio.toLocaleString("es-AR")}</p>
                  <div className={styles.btnsItem}>
                    <button
                      className={styles.btnDisminuir}
                      onClick={() => onRestar(producto.id)}
                    >
                      -
                    </button>
                    <label htmlFor="cantidad">Cantidad:</label>
                    <input
                      type="number"
                      value={producto.cantidad}
                      name="cantidad"
                      onChange={(e) =>
                        onCambiarCantidad(producto.id, e.target.value)
                      }
                    />
                    <button
                      className={styles.btnAgregar}
                      onClick={() => onSumar(producto.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className={styles.footer}>
          <h3>Total: ${total.toLocaleString("es-AR")}</h3>
          <button className="btn btn-primary">Finalizar compra</button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
