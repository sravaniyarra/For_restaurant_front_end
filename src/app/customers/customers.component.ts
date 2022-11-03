import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomersService } from '../Services/customers.service';
import { Customers } from '../models/customers';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(private customersService:CustomersService) { }

  ngOnInit(): void {
    this.loadData()

  }
  isedit=false;
  searchValue : string;


  formdata = new FormGroup({
    username : new FormControl(''), 
    email: new FormControl(''),
    phonenumber: new FormControl(''),
    password: new FormControl('')
    
    
 });
 indexselectedtoEdit;
   listOfData = [] 
   loadData(){
    this.listOfData = []
    this.customersService.getData().subscribe(res=>{ 
       Object.values(res).forEach(datafromdb=>{
        this.listOfData.push(datafromdb)
       })  
    })
  }
  onCancel(){ 
    this.formdata.reset()
  }
onSubmit(){
    this.listOfData.push(this.formdata.value)
    this.customersService.postData(this.formdata.value).subscribe((res:any)=>{
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
this.customersService.deleteData(data.username).subscribe((res:any)=>{  
  if(res && res.status && res.status === 'ok' && res.data){
    this.loadData()
  } else if(res && res.status && res.status === 'error'){
    console.log('Something went wrong')
  } 
}) 
}

onUpdate(){
 this.customersService.modifyData(this.formdata.value,this.listOfData[this.indexselectedtoEdit]['_id']).subscribe(res=>{
  this.loadData()
  this.isedit = false;
  this.formdata.reset();
 })

} 

}
