import {CartItem, Product} from "@/types";
import {randomUUID} from "expo-crypto";
import {createContext, PropsWithChildren, useContext, useState} from "react";

type CartType = {
  items: CartItem[];
  addItem: (product: Product, size: CartItem["size"]) => void;
  updateQuantity: (itemId: string, amount: -1 | 1) => void;
  total: string;
};

const CartContext = createContext<CartType>({
  items: [],
  addItem: () => {},
  updateQuantity: () => {},
  total: "",
});

const CartProvider = ({children}: PropsWithChildren) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const addItem = (product: Product, size: CartItem["size"]) => {
    // if already in cart, update quantity
    const existingItem = items.find((item) => item.product.id === product.id && item.size === size);
    if (existingItem) {
      updateQuantity(existingItem.id, 1);
      return;
    }

    const newCartItem: CartItem = {
      id: randomUUID(),
      product,
      product_id: product.id,
      size,
      quantity: 1,
    };

    setItems([newCartItem, ...items]);
  };
  const updateQuantity = (itemId: string, amount: -1 | 1) => {
    const updatedItems = items
      .map((item) => {
        return item.id === itemId ? {...item, quantity: (item.quantity += amount)} : item;
      })
      .filter((item) => item.quantity > 0);

    setItems(updatedItems);
  };

  const total = items
    .reduce((sum, currItem) => {
      sum += currItem.quantity * currItem.product.price;
      return sum;
    }, 0)
    .toFixed(2);

  return <CartContext.Provider value={{items, addItem, updateQuantity, total}}>{children}</CartContext.Provider>;
};

export default CartProvider;
export const useCart = () => useContext(CartContext);
