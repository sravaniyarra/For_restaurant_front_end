import { Product } from './product';

export class CartItem {
  productId: number;
  productName: string;
  qty: number;
  price: number;

  constructor(id: number, product: Product, qty = 1) {
    this.productName = product.name;
    this.price = product.price;
    this.qty = qty;
  }
}

