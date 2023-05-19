import { size } from "lodash";
import { BasicLayout } from "@/layouts";
import {
  Listproducts,
  Footer,
  NotFound,
  FooterApp,
  Separator,
} from "@/components";
import { useRouter } from "next/router";

import { useCategoriesToProducts } from "@/hooks";
import { useEffect, useState } from "react";

export default function category() {
  const { categories, products } = useCategoriesToProducts();

  const router = useRouter();
  const { category } = router.query;

  const [productContext, setProductContext] = useState("");
  const [categoriesContext, setCategoriesContext] = useState("");

  console.log("slug");
  console.log(category);
  const hasProduct = size(productContext) > 0;

  const response = categories.find((element) => element.slug === category);
  const result = products.filter(
    (product) => product.categoryData.id === response.id
  );
  setProductContext(result);
  setCategoriesContext(response);

  return (
    <div>
      <BasicLayout>
        <Separator />
        <Separator />
        {hasProduct ? (
          <Listproducts products={productContext} />
        ) : (
          <NotFound
            title={"Upppss... No hay productos para mostrar en esta categoría"}
          />
        )}
        <FooterApp />
        <Footer />
      </BasicLayout>
    </div>
  );
}
