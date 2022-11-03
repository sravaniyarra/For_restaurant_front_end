import { Component, Input, OnInit } from '@angular/core';

import { ProductService } from 'src/app/Services/product.service';
import { Product } from 'src/app/models/product';
import { WishlistService } from 'src/app/Services/wishlist.service';
import { MessengerService } from 'src/app/Services/messenger.service';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'] 
})
export class ProductListComponent implements OnInit {

  productList: Product[] = []
  wishlist: number[] = []
  public filterCategory : any
  @Input() productItem : Product;

  @Input() addedToWishlist: boolean;

  searchValue : string = "";

  constructor(
    private productService: ProductService,
    private msg: MessengerService,
    private cartService: CartService,
    private wishlistService: WishlistService
  ) { }

  ngOnInit() {
    this.loadProducts();
    this.loadWishlist();
   
  }

  loadProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.productList = products;
      this.filterCategory = products;
      console.log(this.productList)
      this.productList.forEach((a:any)=>{
        if(a.category === "Pizza"){
          a.category = "Pizza Corner"
        }
        Object.assign(a,{quantity:1,total:a.price})

      })
      console.log(this.productList)
     
    })
    

  }
  loadWishlist() {
    this.wishlistService.getWishlist().subscribe(productIds => {
      this.wishlist = productIds
    })
  }
   
    AddToCart(item:any) {
      this.cartService.addtoCart(item);
    }
  
   // handleAddToWishlist() {
      //this.wishlistService.addToWishlist(this.productItem.id).subscribe(() => {
       // this.addedToWishlist = true;
      //})
    //}
  
   // handleRemoveFromWishlist() {
    //  this.wishlistService.removeFromWishlist(this.productItem.id).subscribe(() => {
      //  this.addedToWishlist = false;
      //})
   // }
    filter(category:any){
           this.filterCategory = this.productList
           .filter((a:any)=>{
            if(a.category == category || category == ''){
                   return a;
            }
           })
    }
  }

  
      
   
      