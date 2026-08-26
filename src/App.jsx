import React from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className={styles.container}>
      <Header />

      <h1></h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione debitis
        distinctio quae consequuntur ut, molestias necessitatibus obcaecati
        alias autem deleniti unde amet tempora dolorum? Tempora aspernatur
        architecto vitae praesentium adipisci?
      </p>
    </div>
  );
};

export default App;
