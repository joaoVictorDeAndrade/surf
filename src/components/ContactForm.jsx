import React from "react";
import ButtonMatricula from "./ButtonMatricula";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  return (
    <form action="" className={styles.form}>
      <label htmlFor="name">
        Nome
        <input type="text" id="name" />
      </label>
      <label htmlFor="email">
        E-mail
        <input type="email" id="email" />
      </label>
      <label htmlFor="textarea">
        Mensagem
        <textarea id="textarea" rows="10"></textarea>
      </label>
      <ButtonMatricula text="ENVIAR MENSAGEM" size="55%" />
    </form>
  );
}
