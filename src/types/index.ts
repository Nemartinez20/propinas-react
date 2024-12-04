export type MenuItem_T = {
  id: number;
  name: string;
  price: number;
};

export type OrderItem_T = MenuItem_T & {
  quantity: number;
};
