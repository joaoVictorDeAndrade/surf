import React from "react";
import styles from "./Contact.module.css";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section className={styles.wrapper} id="contato" >
      <h2>Contato</h2>

      <div className={styles.grid}>
        <ContactForm />
        <div className={styles.info}>
          <div>
            <span>Endereço</span>
            <p>Praia Mansa nº 47, </p>
            <p>Rio de Janeiro- RJ</p>
            <p>Procure a barraca vermelha</p>
          </div>
          <div>
            <span>Email & Telefone</span>
            <p>contato@surfbot.com</p>
            <p>21 99999-9999</p>
          </div>
          <div>
            <span>Horário</span>
            <p>De sexta à Sabado</p>
            <p>Das 06:00 às 14:00</p>
          </div>
        </div>
      </div>
    </section>
  );
}
