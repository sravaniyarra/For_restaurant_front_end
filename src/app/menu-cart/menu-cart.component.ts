import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-menu-cart',
  templateUrl: './menu-cart.component.html',
  styleUrls: ['./menu-cart.component.css']
})
export class MenuCartComponent implements OnInit {

  public searchValue : string;
  public totalItem :number = 0;

  constructor(private productService:ProductService, private cartService:CartService) { }

  ngOnInit(): void {
       this.cartService.getProducts()
       .subscribe(res=>{
               this.totalItem = res.length;
       })
  }
}
