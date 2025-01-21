import { MenuItem_T, OrderItem_T } from "../types";

type OrderContentsProps_T = {
  order: OrderItem_T[];
  deleteItem: (id: MenuItem_T["id"]) => void;
};

export default function ContenidoOrder({
  order,
  deleteItem,
}: OrderContentsProps_T) {
  console.log(order);

  return (
    <>
      <div className="space-y-3  mt-5">
        {order.length === 0 ? (
          <p className="text-center">La orden esta vacia</p>
        ) : (
          order.map((item) => (
            <div
              className="border border-slate-600 p-3 flex justify-between"
              key={item.id}
            >
              <div className="flex flex-col">
                <p>{item.name}</p>
                <p className="font-bold">
                  Cantidad {item.quantity} <span>${item.price}</span>
                </p>
              </div>
              <div>
                <button
                  className=" bg-red-600 text-white  rounded-full h-8 w-8"
                  onClick={() => deleteItem(item.id)}
                >
                  X
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
