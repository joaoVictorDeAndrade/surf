import React from "react";
import styles from "./FeaturedContent.module.css";

export default function FeaturedContent() {
  return (
    <section className={styles.featured}>
      <h1 className={styles.title}>Escola de Surf</h1>
      <a className={styles.matricula} href="Botão Matricule-se">Matricule-se </a>
    </section>
  ); 
}
