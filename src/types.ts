export interface Product {
  id: number;
  name: string;
  origin: string;
  category: string;
  price: number;
  description: string;
  flavor: string;
  roast: string;
  weight: string;
  image: string;
  badge?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
