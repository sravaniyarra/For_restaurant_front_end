import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CartService } from '../../../Services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem : any;

  public addressForm : FormGroup

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  }
 // removeItem(data)
 // {
  //this.cartService.removeProductFromCart(data._id).subscribe((res:any)=>{  
   // if(res && res.status && res.status === 'ok' && res.data){
      //this.cartService.getCartItems()
   // } else if(res && res.status && res.status === 'error'){
     // console.log('Something went wrong')
   // } 
//  }) 
//}

}  
 