import React from "react";

const Cards = ({ producto }) => {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={producto.imagen} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{producto.nombre}</h5>
          <p className="card-text">
            $ {producto.precio.toLocaleString("es-AR")}
          </p>
          <button className="btn btn-primary">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
