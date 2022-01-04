import React from "react";
import ButtonMatricula from "../ButtonMatricula";
import Prancha from "../../assets/icons/prancha.svg";

import styles from "./style.module.css";

export default function Infantil() {
  return (
    <div className="cardAulas">
      <div className="divPrancha">
        <img src={Prancha} />
      </div>
      <h3>INFANTIL</h3>
      <ul>
        <li className={styles.li}>Público entre 5 e 15 anos</li>
        <li className={styles.li}>Equipamentos fornecidos</li>
        <li className={styles.li}>Horários de Sex. à Sab.</li>
        <li className={styles.li}>2 horas seguidas de aula</li>
      </ul>
      <p>R$ 49,00 / Aula</p>
      <ButtonMatricula text="MATRICULE-SE" size="90%" />
    </div>
  );
}
