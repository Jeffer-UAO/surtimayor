import { useState } from "react";
import { CardImg, CardTitle } from "reactstrap";
import { map } from "lodash";

import { WhatsApp } from "../WhatsApp";

import { BASE_NAME } from "@/config/constants";
import styles from "./DetailProduct.module.scss";

export function DetailProduct(props) {
  const { product, relate } = props;
  const { productData } = product;

  const [data, setProductData] = useState(productData);

  window.scrollTo(0, 0);

  const changeDetail = (data) => {
    setProductData(data);
    window.scrollTo(0, 0);
  };


    return (
      <div className={styles.detailProduct}>
        <div className={styles.product} id="seccion-1">
          <CardImg alt="Card image cap" src={BASE_NAME + data.images} />

          <div className={styles.description}>
            <CardTitle className={styles.title}>
              <h5>{data.name_extend}</h5>
              {data.price1 !== null && <h6>$ {data.price1}</h6>}
            </CardTitle>
            <p>{data.description}</p>

            <div className={styles.whatsapp}>
              <WhatsApp
                phoneNumber="+57 3156665224"
                message={
                  BASE_NAME +
                  data.images +
                  " " +
                  data.name_extend +
                  " " +
                  "Referencia: " +
                  data.ref
                }
              />
            </div>
          </div>
        </div>

        <div className={styles.relate}>
          <p>PRODUCTOS RELACIONADOS</p>
          <br/>

          <div className={styles.list}>
            {map(relate, (product, index) => (
              <div
                key={index}
                className={styles.list__product2}
                onClick={() => changeDetail(product.productData)}
              >
                <CardImg
                  alt="Card image cap"
                  src={BASE_NAME + product.productData.images}
                />

                <div className={styles.name}>
                  <CardTitle>
                    <h5>
                      {product.productData.name}{" "}
                      {product.productData.name_extend}
                    </h5>
                    {product.productData.price1 !== null && (
                      <h6>$ {product.productData.price1}</h6>
                    )}
                  </CardTitle>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
