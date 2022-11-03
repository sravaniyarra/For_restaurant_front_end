import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/Services/messenger.service';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/Services/cart.service';
import { CartItem } from 'src/app/models/cart-item';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit , OnDestroy {
  getProductsSubscription: Subscription;
  loadDataSubscription : Subscription;
  public addressForm : FormGroup
  public cartItems = [];

  public cartTotal :number

  constructor(
    private msg: MessengerService,
    private cartService: CartService
  ) { }

  formdata = new FormGroup({
    name : new FormControl(''),
    address: new FormControl(''),
    phonenumber: new FormControl(''),
    fav_language: new FormControl(''),
    state: new FormControl(''),
    city: new FormControl(''),
    pincode: new FormControl('')
    
 });
  ngOnInit() {
  this.getProductsSubscription =  this.cartService.getProducts()
  .subscribe(res=>{
    // this.cartItems = res;
    this.loadData();
  })
   // this.handleSubscription(); 
    //this.loadCartItems();
  }
  
  ngOnDestroy(): void {
    this.getProductsSubscription.unsubscribe();
    this.loadDataSubscription.unsubscribe();
  }

 // handleSubscription() {
   // this.msg.getMsg().subscribe((product: Product) => {
      //this.loadCartItems();
    //})
  //}
   loadData(){
   this.loadDataSubscription = this.cartService.getProducts().subscribe(res=>{
      Object.values(res).forEach(datafromdb=>{
        this.cartItems.push(datafromdb)
      })
      this.cartTotal = this.cartService.getTotalPrice();
    })
   }
  removeItem(item:any){
   this.cartItems = this.cartService.removeCartItem(item);
   this.cartTotal = this.cartService.getTotalPrice();
  }
  emptyCart(){
    this.cartService.removeAllCart();
  }

  
  calcCartTotal() {
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }
  onSubmit(){
    alert("Your order has placed")
  }

}
