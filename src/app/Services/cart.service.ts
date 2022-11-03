import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { CartItem } from '../models/cart-item';
import { cartUrl } from '../config/api';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

 
  public cartItems: CartItem[] = [];
  public productList = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) { }
   
   getProducts(){
    return this.productList.asObservable();
    //return this.http.get('http://localhost:3000/cart')
   }

   setProduct(product : any){
    this.cartItems.push(...product);
    this.productList.next(product)
   }

   addtoCart(product:any){
      this.cartItems.push(product);
      this.productList.next(this.cartItems)
      this.getTotalPrice();
      console.log(this.cartItems)
   }
   getTotalPrice():number{
    let grandTotal = 0;
    this.cartItems.map((a:any)=>{
      grandTotal +=a.price;
    })
    return grandTotal;
   }

   removeCartItem(product:any){
    this.cartItems.map((a:any,index:any)=>{
       if(product.id === a.id){
        console.log('We are in condition' , product)
        this.cartItems.splice(index,1);
       }
    })
    console.log('Cart items are ' , this.cartItems)
    return this.cartItems;
   }
   removeAllCart(){
    this.cartItems = []
    this.productList.next(this.cartItems);
   }


   




}


 // getCartItems(): Observable<CartItem[]> {
    //TODO: Mapping the obtained result to our CartItem props. (pipe() and map())
   // return this.http.get<CartItem[]>(cartUrl).pipe(
     // map((result: any[]) => {
      
       // let productExists = false
        //for (let item of result) {
        

          //for (let i in this.cartItems) {
            //if (this.cartItems[i].productId === item.product.id) {
              //this.cartItems[i].qty++
              //productExists = true
            //  break;
            //}
          //}

          //if (!productExists) {
            //this.cartItems.push(new CartItem(item.id, item.product));
          //}
        //}

        //return this.cartItems;
      //})
    //);
  //}

  //addProductToCart(product: Product): Observable<any> {
    //return this.http.post(cartUrl, { product });
  //}
  //removeProductFromCart(_id):Observable<any>{
    //return this.http.delete(`http://localhost:3000/cart/delete/${_id}`)
  //}




