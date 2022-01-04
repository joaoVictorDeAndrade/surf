import React from "react";
import ButtonMatricula from "../ButtonMatricula";
import Prancha from "../../assets/icons/prancha.svg";

import styles from "./style.module.css";

export default function Adulto() {
  return (
    <div className="cardAulas">
      <div className="divPrancha">
        <img src={Prancha} />
        <img src={Prancha} />
      </div>
      <h3>ADULTO</h3>
      <ul>
        <li className={styles.li}>Público entre 16 e 80 anos</li>
        <li className={styles.li}>Equipamentos fornecidos</li>
        <li className={styles.li}>Horários de Sex. à Sab.</li>
        <li className={styles.li}>3 horas seguidas de aula</li>
      </ul>
      <p>R$ 69,00 / Aula</p>
      <ButtonMatricula text="MATRICULE-SE" size="90%" />
    </div>
  );
}
