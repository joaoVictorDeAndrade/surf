import React from "react";
import styles from "./Benefits.module.css";

import { ReactComponent as Sandalhas } from "../assets/icons/sandalhas.svg";
import { ReactComponent as Coco } from "../assets/icons/coco.svg";
import { ReactComponent as Boia } from "../assets/icons/boia.svg";

import ImageSecond from "../assets/images/imageSecond.jpg";
import Map from "../assets/images/map.jpg";

export default function Benefits() {
  return (
    <section className={styles.benefits} id="praia">
      <div className={styles.firstColumn}>
        <img className={styles.imagePranchas} src={ImageSecond} alt="" />
        <img className={styles.map} src={Map} alt="" />
        <div className={styles.howToGo}>
          <h3>COMO CHEGAR</h3>
          <p>
            <span>Carro</span> pela via Lúcio Costa sentido Barra
          </p>
          <p>
            <span>Ônibus</span> linhas 2333, 168, 189 e 170
          </p>
          <p>
            <span>Metrô</span> linha azul sentido Zona Sul
          </p>
        </div>
      </div>
      <div className={styles.secondColumn}>
        <div className={styles.info}>
          <h2 className={styles.titleInfo}>
            <span className={styles.blueText}>Aulas</span> em uma das melhores
            praias do <span className={styles.blueText}>Rio</span>.
          </h2>
          <div className={styles.benefitsExamples}>
            <Sandalhas />
            <p>8km de costa</p>
          </div>
          <div className={styles.benefitsExamples}>
            <Coco />
            <p>Restaurantes à beira mar</p>
          </div>
          <div className={styles.benefitsExamples}>
            <Boia />
            <p>Salva-vidas a cada 300m</p>
          </div>
        </div>
        <div className={styles.text}>
          <p>
            Como cidade capital, abriga na zona chamada Plateau, promontório à
            beira-mar, edifícios públicos e outras construções de importância,
            como o Palácio Presidencial, construído no fim do século XIX para
            ser a residência do governador português.
          </p>
          <p>
            Como cidade capital, abriga na zona chamada Plateau, promontório à
            beira-mar, edifícios públicos e outras construções de importância,
            como o Palácio Presidencial, construído no fim do século XIX para
            ser a residência do governador português.
          </p>
        </div>
      </div>
    </section>
  );
}
