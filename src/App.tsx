import ContenidoOrder from "./components/ContenidoOrder";
import OrderTotals from "./components/OrderTotals";
import Productos from "./components/Productos";
import { menuItems } from "./data/products";
import useOrder from "./hooks/useOrder";

function App() {
  //Mi hook
  const { order, addItem, deleteItem } = useOrder();
  //
  //
  //
  //render a la vista
  return (
    <>
      <header className="bg-sky-700 p-4">
        <h1 className="text-white text-4xl text-center font-bold">
          Calculadora de propinas
        </h1>
      </header>
      <main className=" mb-10   gap-4 p-10 grid   md:grid-cols-2 ">
        <div>
          <h2 className="text-center font-bold text-4xl mb-4">Menu</h2>
          <div className="space-y-3">
            {menuItems.map((item) => (
              <Productos key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>
        <div className="px-2">
          {" "}
          <h2 className="text-center font-bold text-4xl mb-4">Consumo</h2>
          <ContenidoOrder order={order} deleteItem={deleteItem} />
          <OrderTotals order={order} />
        </div>
      </main>
    </>
  );
}

export default App;
