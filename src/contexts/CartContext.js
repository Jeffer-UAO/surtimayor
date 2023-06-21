import { useState, useEffect, createContext } from "react";
import { Cart } from "@/api/cart";

const cartCtrl = new Cart();

export const CartContext = createContext();

export function CartProvider(props) {
  const { children } = props;
  const [cart, setCart] = useState(null);
  const [total, setTotal] = useState(0);


  console.log(total);

  useEffect(() => {
    const response = cartCtrl.getAll();
    const und = cartCtrl.count();
    setTotal(und)
    console.log(response);
  }, []);

  const addCart = (itemId) => {
    cartCtrl.add(itemId);
  };

  const data = {
    cart,
    total,
    addCart,
    deleteItem: () => {},
    changeQuantityItem: () => {},
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
}
