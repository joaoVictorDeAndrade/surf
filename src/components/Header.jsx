import React from "react";
import styles from "./Header.module.css";

import { ReactComponent as Logo } from "../assets/icons/surfLogo.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <nav aria-aria-label="primaria">
        <ul>
          <li>
            <a href="#praia" className={styles.anchor}>
              Praia
            </a>
          </li>
          <li>
            <a href="#aulas" className={styles.anchor}>
              Aulas
            </a>
          </li>
          <li>
            <a href="#contato" className={styles.anchor}>
              Contato
            </a>
          </li>
          <li>
            <a href="">Matricule-se </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
 