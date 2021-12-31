import React from "react";
import styles from "./Aulas.module.css";

export default function Aulas() {
  return (
    <section className={styles.aulas}>
      <h2></h2>
      <div className={styles.cardsAulas}>
        <div className={styles.cardAulas}></div>
        <div className={styles.cardAulas}></div>
        <div className={styles.cardAulas}></div>
      </div>
      <p>
        Possui um grupo com mais de <span>3 pessoas</span>?
      </p>
      <p>Entre em contato para um desconto personalizado</p>
    </section>
  );
}
