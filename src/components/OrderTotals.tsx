import { useMemo } from "react";
import { OrderItem_T } from "../types";

type OrderTotals_Props = {
  order: OrderItem_T[];
};

export default function OrderTotals({ order }: OrderTotals_Props) {
  //Calcular es subtotal a pagar
  const subtotal = useMemo(
    () =>
      order.reduce(
        (acumulador, item) => acumulador + item.price * item.quantity,
        0
      ),
    [order]
  );

  //
  //
  return (
    <>
      <h3 className="text-2xl font-bold py-3">Totales y Propina</h3>
      <p>
        Subtotal a pagar <span className="font-bold py-3"> ${subtotal}</span>
      </p>
      <p>
        Propina <span className="font-bold py-3"> $0</span>
      </p>
      <p>
        Total a pagar <span className="font-bold py-3"> $0</span>
      </p>
    </>
  );
}
