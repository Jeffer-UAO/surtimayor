import styles from "./AboutUs.module.scss";

export function AboutUs() {

  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <h1>Nosotros</h1>
        <p>
        ¡Bienvenidos a Mi Hogar Distribuciones! <br/>
Somos una empresa dedicada a la distribución de productos para el cuidado personal de alta calidad y a precios competitivos. En nuestro catálogo encontrarás una amplia variedad de productos para el pelo, las uñas, herramientas, utensilios y mucho más.
Nuestro compromiso es ofrecerte siempre los mejores productos del mercado, seleccionados cuidadosamente para garantizar la satisfacción de nuestros clientes. Nos aseguramos de trabajar con los proveedores más confiables y de mantener altos estándares de calidad en todos nuestros productos.
Además, en Mi Hogar Distribuciones nos preocupamos por brindarte una excelente experiencia de compra, por lo que contamos con un equipo de atención al cliente siempre dispuesto a ayudarte y resolver cualquier duda o inquietud que puedas tener.
Nos enorgullece poder decir que contamos con clientes satisfechos en todo el país, y trabajamos día a día para seguir siendo una opción confiable y accesible para todas las personas que buscan productos para el cuidado personal de alta calidad.
¡Gracias por visitarnos y esperamos contar con tu preferencia!
        </p>
      </div>

      <div className={styles.mision}>
        <h5>Misión</h5>
        <p>
        La misión de Mi Hogar Distribuciones es ofrecer productos para el hogar y cuidado personal de alta calidad y accesibles, seleccionados cuidadosamente para satisfacer las necesidades y preferencias de nuestros clientes.

Nos esforzamos por ofrecer un servicio al cliente excepcional, brindando asesoría y soporte para que nuestros clientes encuentren los productos que necesitan, y garantizando su satisfacción en cada compra.

Además, en Mi Hogar Distribuciones estamos comprometidos con la sostenibilidad ambiental, por lo que nos aseguramos de trabajar con proveedores responsables y de promover prácticas sostenibles en la producción y distribución de nuestros productos.

Trabajamos con ética y profesionalismo, valorando la honestidad y la transparencia en todas nuestras acciones y relaciones comerciales. Buscamos generar valor y bienestar para nuestros clientes, empleados, proveedores y la sociedad en general, contribuyendo al desarrollo sostenible del país.

En resumen, nuestra misión es ofrecer productos de alta calidad y accesibles, con un servicio al cliente excepcional y un compromiso con la sostenibilidad ambiental y el desarrollo sostenible, para satisfacer las necesidades y preferencias de nuestros clientes y contribuir al bienestar de la sociedad.
        </p>
      </div>

      <div className={styles.vision}>
        <h5>Visión</h5>
        <p>
        La visión de Mi Hogar Distribuciones es ser una empresa líder en la distribución de productos para el hogar y cuidado personal, reconocida por la calidad y variedad de sus productos, su excelente servicio al cliente y su compromiso con la sostenibilidad ambiental.

Nos esforzamos por ofrecer siempre los mejores productos para el cuidado personal, seleccionados cuidadosamente para garantizar la satisfacción de nuestros clientes y contribuir a su bienestar. Además, nos preocupamos por promover prácticas sostenibles en la producción y distribución de nuestros productos, para minimizar nuestro impacto en el medio ambiente.

Nuestra meta es convertirnos en la opción preferida de las personas que buscan productos de alta calidad y accesibles para el cuidado personal en sus hogares, a través de un servicio al cliente excepcional y una experiencia de compra satisfactoria.

Trabajamos con pasión y dedicación para alcanzar esta visión, y nos comprometemos a seguir mejorando y creciendo para cumplir con las expectativas de nuestros clientes y contribuir al bienestar de la sociedad.
        </p>
      </div>

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
  );
}
