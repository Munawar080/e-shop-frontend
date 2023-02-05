export interface ProductList {
  $key: string;
  title: string;
  price: number;
  imageUrl: string;
  category: string;
}
export interface Products {
  key: string | null;
  payload: ProductList;
}
