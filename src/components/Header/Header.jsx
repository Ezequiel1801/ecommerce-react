import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <a href="#" className={`${styles.logo}`}>
            Gaming Wave
          </a>
          <div>
            <ul className={styles.linkList}>
              <li className={styles.link}>
                <a href="#">Procesadores</a>
              </li>
              <li className={styles.link}>
                <a href="#">Motherboards</a>
              </li>
              <li className={styles.link}>
                <a href="#">Graficas</a>
              </li>
              <li className={styles.link}>
                <a href="#">Monitores</a>
              </li>
            </ul>
          </div>
          <div className={styles.cartSearch}>
            <button className={styles.btnCart}>🛒</button>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar productos"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
