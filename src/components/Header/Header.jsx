import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <a href="#" className={`${styles.logo}`}>
            Gaming Retro
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
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </nav>
      </header>
    </div>
  );
};

export default Header;
