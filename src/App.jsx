import React from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";
import products from "./productos";

const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        {products.map((producto) => (
          <Cards key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
};

export default App;
