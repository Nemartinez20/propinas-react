import { OrderItem_T } from "../types";

type OrderContentsProps_T = {
  order: OrderItem_T[];
};

export default function ContenidoOrder({ order }: OrderContentsProps_T) {
  console.log(order);
  return (
    <>
      <div className="space-y-3  mt-5">
        {order.length === 0 ? (
          <p className="text-center">La orden esta vacia</p>
        ) : (
          order.map((item) => (
            <div className="border border-slate-600 p-3">
              <p>{item.name}</p>
              <p>{item.quantity}</p>
              <p>{item.price}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
}
