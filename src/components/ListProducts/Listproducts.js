import { CardImg, CardSubtitle, CardTitle } from "reactstrap";
import { map, size } from "lodash";
import { BASE_NAME } from "@/config/constants";
import { WhatsApp } from "../WhatsApp";

import { useCategoriesToProducts } from "@/hooks";

import styles from "./ListProduts.module.scss";
import { useEffect, useState } from "react";
import { NotFound } from "../NotFound";

export function Listproducts(props) {
  const { category, getDetailProduct, addCartWrapper } = props;
  const { products } = useCategoriesToProducts("");
  const [productsData, setProductsData] = useState("");
  const [loading, setLoading] = useState(true);

  const hasProduct = size(productsData) > 0;

  useEffect(() => {
    const result = products.filter(
      (product) => product.categoryData.id === category.id
    );

    setProductsData(result);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <>       
        <p>Cargando....</p>
      </>
    );
  }

  return (
    <>    
      {!hasProduct ? (
        <NotFound title={"Uppsss... No hay productos para mostar en esta categoría"} />
      ) : (
        <div className={styles.listProduct}>
          <h4>{category.name}</h4>
          <div className={styles.list}>
            {map(productsData, (product, index) => (
              <div key={index} className={styles.list__product}>
                <div>
                    <CardImg
                      alt="Card image cap"
                      src={BASE_NAME + product.productData.images}
                      onClick={()=>{getDetailProduct(product)}}
                    />
 
                  <div className={styles.product}>
                    <CardTitle className={styles.title}>
                      <h5>{product.productData.name_extend}</h5>
                      <button onClick={ ()=> addCartWrapper(product.productData.codigo)}>
                        addCart
                      </button>
                    </CardTitle>

                    <div className={styles.title}>
                      <CardSubtitle>
                        {product.productData.price1 !== null && (
                          <h5> $ {product.productData.price1}</h5>
                        )}
                      </CardSubtitle>
                      
                      <div>
                        <WhatsApp
                          phoneNumber="+573156665224"
                          message={
                            BASE_NAME +
                            product.productData.images +
                            " " +
                            product.productData.name_extend +
                            " " +
                            "Referencia: " +
                            product.productData.ref
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
