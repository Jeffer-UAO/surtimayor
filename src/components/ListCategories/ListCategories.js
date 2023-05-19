import { CardImg, CardTitle } from "reactstrap";
import { map } from "lodash";
import { BASE_NAME } from "@/config/constants";
import styles from "./ListCategories.module.scss";


export function ListCategories(props) {
  const { categories, chagePage } = props;

  return (
    <div>     
      <div className={styles.content}>
        <div className={styles.list}>
          {map(categories, (category) => (
            <div key={category.id} onClick={() => chagePage(category)}>
             
                <CardImg
                  alt="Card image cap"
                  src={BASE_NAME + category.image}
                  className={styles.skeleton}
                />

                <div className={styles.category}>
                  <CardTitle className={styles.title}>
                    <h2>{category.name}</h2>
                    <h6>ver más</h6>
                  </CardTitle>
                </div>
      
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
