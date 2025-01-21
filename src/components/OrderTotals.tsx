import { useMemo } from "react";
import { OrderItem_T } from "../types";

type OrderTotals_Props = {
  order: OrderItem_T[];
  tip: number;
};

export default function OrderTotals({ order, tip }: OrderTotals_Props) {
  //Calcular es subtotal a pagar
  const subtotal = useMemo(
    () =>
      order.reduce(
        (acumulador, item) => acumulador + item.price * item.quantity,
        0
      ),
    [order]
  );

  //Calcular porcentaje propinas
  const tipAmount = useMemo(() => subtotal * tip, [tip, order]);

  //Calcular total
  const total = useMemo(() => subtotal + tipAmount, [tip, order]);
  //
  // const texto = "hola mundo como estan la vida es igual";

  // const primero = texto.split(" ").slice(0, 2).join(" ");
  // console.log(primero);
  // primero.slice(0, 2);
  // console.log(primero);

  //
  //
  return (
    <>
      <h3 className="text-2xl font-bold py-3">Totales y Propina</h3>
      <p>
        Subtotal a pagar <span className="font-bold py-3"> ${subtotal}</span>
      </p>
      <p>
        Propina <span className="font-bold py-3"> ${tipAmount}</span>
      </p>
      <p>
        Total a pagar <span className="font-bold py-3"> ${total}</span>
      </p>
    </>
  );
}
