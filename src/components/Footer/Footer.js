import React, { useEffect, useState } from "react";
import { map } from "lodash";
import { Categories } from "@/api/category";
import Link from "next/link";

import styles from "./Footer.module.scss";

const categoriesCtrl = new Categories();

export function Footer() {
  const [categories, setCategories] = useState(null);
  console.log("Pie general");

  useEffect(() => {
    (async () => {
      try {
        const response = await categoriesCtrl.getAll();
        setCategories(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className={styles.footer}>
      <div>
        <div className={styles.content}>
          <h6>SOBRE NOSOTROS</h6>
          <div className={styles.link}>
            <p>
              <Link href="/about">
                <p>Nosotros</p>
              </Link>
            </p>
            <p>
              <Link href="/contact">
                <p>Contacto</p>
              </Link>
            </p>
            <p>
              <Link href="/">
                <p>Productos</p>
              </Link>
            </p>
          </div>
        </div>

        <h6>CATEGORÍAS</h6>
        <div className={styles.link}>
          {map(categories, (category) => (
            <p key={category.id}>{category.name}</p>
          ))}
        </div>
      </div>
      <div>
        <p className={styles.copyright}>
          DISTRIBUCIONES Copyright © 2023. <br /> Todos los derechos reservados 
          Desarrollado por: <br /> Jeffer Quiñones 
          Cel: 300 530 9990 <br /> Versión 3.0.0
        </p>
      </div>
    </div>
  );
}
