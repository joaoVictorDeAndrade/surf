import React from "react";
import styles from "./Header.module.css";

import { ReactComponent as Logo } from "../assets/icons/surfLogo.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <nav>
          <a href="" className={styles.anchor}>Praia </a>
          <a href="" className={styles.anchor}>Aulas </a>
          <a href="" className={styles.anchor}>Contato </a>
          <a href="">Matricule-se </a>
      </nav>
    </header>
  );
} 
