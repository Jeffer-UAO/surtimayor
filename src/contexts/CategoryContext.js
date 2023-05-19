import { createContext, useEffect, useState } from "react";

import { Categories, Products } from "@/api";

const categoriesCtrl = new Categories();
const productsCtrl = new Products();

export const CategoryContext = createContext();
export function CategoryProvider(props) {
  const { children } = props;

  const [categories, setCategories] = useState(null);
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await categoriesCtrl.getAll();
        setCategories(response);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    })();
  }, []);


  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await productsCtrl.getProductsCategoryAll();
        setProducts(response);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    })();
  }, []);

  const getCategories = async () => {
    try {
      console.log("getCategories");
    } catch (error) {
      console.error(error);
    }
  };

  const data = {
    categories,
    products,
    promotions: null,
    featured: null,
    loading
  };

  if (loading) return null;

  return (
    <CategoryContext.Provider value={data}>{children}</CategoryContext.Provider>
  );
}
