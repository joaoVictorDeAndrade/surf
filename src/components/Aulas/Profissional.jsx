import React from "react";
import ButtonMatricula from "../ButtonMatricula";
import Prancha from "../../assets/icons/prancha.svg";

import styles from "./style.module.css";

export default function Profissional() {
  return (
    <div className="cardAulas">
      <div className="divPrancha">
        <img src={Prancha} />
        <img src={Prancha} />
        <img src={Prancha} />
      </div>
      <h3>PROFISSIONAL</h3>
      <ul>
        <li className={styles.li}>Experiência de 3 anos no surf</li>
        <li className={styles.li}>Você deve trazer o equipamento</li>
        <li className={styles.li}>Horários de Sex. à Sab.</li>
        <li className={styles.li}>4 horas seguidas de aula</li>
      </ul>
      <p>R$ 99,00 / Aula</p>
      <ButtonMatricula text="MATRICULE-SE" size="90%" />
    </div>
  );
}
