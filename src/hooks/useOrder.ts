import { useState } from "react";
import type { MenuItem_T, OrderItem_T } from "../types";

export default function useOrder() {
  //States
  const [order, setOrder] = useState<OrderItem_T[]>([]);

  //Funciones

  const addItem = (item: MenuItem_T) => {
    // console.log("agregand...", item);

    const productExist = order.find((elemento) => elemento.id === item.id); //Verificar si existe

    if (productExist) {
      console.log("ya existe");
      //Identificar al que se esta dando click para que aumnete la cantidad y no se agregue otra vez
      const updateOrder = order.map((orderItem) => {
        if (orderItem.id === item.id) {
          return { ...orderItem, quantity: orderItem.quantity + 1 };
        }
        return orderItem;
      });

      setOrder(updateOrder);

      console.log(updateOrder);
    } else {
      console.log("no existe agregando");
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };

  const deleteItem = () => {
    console.log("dando click..");
  };
  console.log(order);
  return {
    order,
    addItem,
    deleteItem,
  };
}
