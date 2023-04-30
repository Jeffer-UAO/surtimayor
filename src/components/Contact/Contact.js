import styles from "./Contact.module.scss";
import { FooterApp } from "../FooterApp";

export function Contact(props) {
  const { about } = props;

  return (
    <>
    <div className={styles.container}>      
<h1>MI HOGAR DISTRIBUCIONES</h1>
<div className={styles.phone}>
        <h5>Líneas de atención</h5>
        <ul>         
          <li>(+57) 315 666 52 24</li>
        </ul>
      </div>

      <div className={styles.adress}>
        <h5>Ubicación:</h5>
        <p>Cra 8 #16-63, Santiago de Cali, Colombia</p>
      
      </div>
     
    </div>
     <FooterApp />
    </>
  );
}
