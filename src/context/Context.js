import React, { createContext } from "react";
import { cartReducer } from "./Reducers";
const cart = createContext();
faker.seed(99);
const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });
  return <cart.Provider vlaue={{ state, dispatch }}>{children}</cart.Provider>;
};
export const CartState = () => {
  return useContext(cart);
};
export default Context;
