import React from "react";
import styles from "./Aulas.module.css";
import Waves from "../assets/icons/ondas.png";

import Infantil from "./Aulas/Infantil";
import Adulto from "./Aulas/Adulto";
import Profissional from "./Aulas/Profissional";

export default function Aulas() {
  return (
    <section className={styles.aulas} id="aulas" >
      <img src={Waves} className={styles.waves} />
      <h2>Aulas</h2>
      <div className={styles.cardsAulas}>
        <Infantil />
        <Adulto />
        <Profissional />
      </div>
      <p className={styles.text}>
        Possui um grupo com mais de <span>3 pessoas</span>?
      </p>
      <p className={styles.text}>
        Entre em contato para um desconto personalizado
      </p>
    </section>
  );
}
