import type { MenuItem_T } from "../types";

type MenuItemProps_T = {
  item: MenuItem_T;
  addItem: (item: MenuItem_T) => void;
};

export default function Productos({ item, addItem }: MenuItemProps_T) {
  return (
    <>
      <div
        className="border-2  border-blue-800 p-3 cursor-pointer flex justify-between hover:bg-emerald-500"
        onClick={() => addItem(item)}
      >
        <p>
          Nombre: <span>{item.name}</span>
        </p>
        <p className="font-bold">
          Precio: <span>${item.price}</span>
        </p>
      </div>
    </>
  );
}
