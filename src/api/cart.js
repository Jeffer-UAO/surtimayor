import { forEach } from "lodash";
import { CART } from "../config/constants";

export class Cart {
  add(itemId) {
    const products = this.getAll();

    const objIndex = products.findIndex((product) => product.id === itemId);

    if (objIndex < 0) {
      products.push({
        id: itemId,
        quantity: 1,
      });
    } else {
      const product = products[objIndex];
      products[objIndex].quantity = product.quantity + 1;
    }
    localStorage.setItem(CART, JSON.stringify(products));
  }

  getAll() {
    const response = localStorage.getItem(CART);
    if (!response) {
      return [];
    } else {
      return JSON.parse(response);
    }
  }

  count(){
    let count = 0;
    const response = this.getAll();      
    
    forEach(response, (item) => {
        count += item.quantity;
    });

    return count;
  }
}
