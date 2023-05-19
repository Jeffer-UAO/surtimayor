import { useState } from "react";
import { DetailProduct, ListCategories, Listproducts, Separator } from "@/components";
import { BasicLayout } from "../../layouts";
import { useCategoriesToProducts } from "@/hooks";


export default function HomePage() {
  const { categories, products } = useCategoriesToProducts();

  const [categoryPage, setCategoryPage] = useState(true);
  const [productPage, setProductPage] = useState(false);
  const [detailProductPage, setDetailProductPage ] = useState(false);

  const [ category, setCategory ] = useState("");
  const [detail, setDetail ] = useState("");
  const [ flag, setFlag ] = useState("");

  const chagePage = (categoryData) => {
    setCategoryPage(false);
    setProductPage(true);
    setDetailProductPage(false);

    setCategory(categoryData);
  }
  
  const getDetailProduct = (detailData) => {
    setCategoryPage(false);
    setProductPage(false);
    setDetailProductPage(true);

    setDetail(detailData);   

    getRelateData(detailData.productData.flag);
  }

  const getRelateData = (flag) =>{
    const result = products.filter(
      (product) => product.productData.flag === flag
    );

    setFlag(result);
    // setLoading(false);

  }

  return (
    <>
      <BasicLayout>
     
        {categoryPage && <ListCategories categories={categories} chagePage={chagePage} />}

        {productPage && <Listproducts category={category} getDetailProduct={getDetailProduct} />}

        {detailProductPage && <DetailProduct product={detail} relate={flag} />}

      </BasicLayout>
    </>
  );
}
