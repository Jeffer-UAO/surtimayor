import styles from "./Contact.module.scss";
import { FooterApp } from "../FooterApp";

export function Contact() {


  return (
    <>
      <div className={styles.container}>
        <h1>DISTRIBUCIONES</h1>
        <div className={styles.phone}>
          <h5>Líneas de atención</h5>
          <ul>
            <li>(+57) 315</li>
          </ul>
        </div>

        <div className={styles.adress}>
          <h5>Ubicación:</h5>
          <p>Cra , Santiago de Cali, Colombia</p>
        </div>
      </div>
      <FooterApp />
    </>
  );
}
