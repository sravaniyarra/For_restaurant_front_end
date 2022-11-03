
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../Services/product.service';
import { Product } from '../models/product';



@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent implements OnInit {
  searchValue:string;

  formdata = new FormGroup({
   name : new FormControl(''),
   category: new FormControl(''),
   description: new FormControl(''),
   price: new FormControl(''),
   imageUrl :new FormControl('') 
    
 });
  isedit: boolean;
  indexselectedtoEdit: any;

  

  constructor(private productService:ProductService) { }

  listOfData = []
  ngOnInit(): void { this.loadData()
  }
  loadData(){
    this.listOfData = []
    this.productService.getProducts().subscribe(res=>{ 
       Object.values(res).forEach(datafromdb=>{
        this.listOfData.push(datafromdb)
       })  
    })
  }
  onSubmit(){
    this.listOfData.push(this.formdata.value)
    this.productService.createProduct(this.formdata.value).subscribe((res:any)=>{
      if(res && res.status && res.data){
        console.log('post response',res)
      }
      this.formdata.reset() 
    }) 
}
  onEdit(index){
    this.isedit = true
    this.formdata.patchValue(this.listOfData[index])
    this.indexselectedtoEdit=index

    }
   onDelete(data)
  {
  this.productService.deleteProducts(data.name).subscribe((data:any) =>{
    console.log(data)
    this.loadData();
  }) 
} 

  

}
