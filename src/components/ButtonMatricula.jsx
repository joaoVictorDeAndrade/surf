import React from "react";
import styles from "./ButtonMatricula.module.css";

export default function Button({ text, size }) {

  return (
    <a className={styles.button} style={{ width: `${size}` }} href="/">
      {text}
    </a>
  );
}
