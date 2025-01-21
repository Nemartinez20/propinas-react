import { useState } from "react";
import type { MenuItem_T, OrderItem_T } from "../types";

export default function useOrder() {
  //States
  const [order, setOrder] = useState<OrderItem_T[]>([]);
  const [tip, setTip] = useState(0);

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

  //loocup
  const deleteItem = (id: MenuItem_T["id"]) => {
    // console.log("dando click..", id);
    setOrder(order.filter((Element) => Element.id !== id));
  };
  // console.log(order);
  return {
    order,
    tip,
    setTip,
    addItem,
    deleteItem,
  };
}
