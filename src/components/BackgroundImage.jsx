import React from "react";
import styles from "./BackgroundImage.module.css";

export default function BackgroundImage() {
  return (
    <section className={styles.wrapper} aria-label="Frase Inspiradora">
      <div>
        <h2>“O surf liberta as ondas de uma vida.”</h2>
        <p>Regis Pereira</p>
      </div>
    </section>
  );
}
