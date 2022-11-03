import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.loadData()

  }
  searchValue : string;
  isedit=false;
  formdata = new FormGroup({
    username : new FormControl(''),
    email: new FormControl(''),
    phonenumber: new FormControl(''),
    password: new FormControl(''),
    
 });
 indexselectedtoEdit;
   listOfData = []
   loadData(){
    this.listOfData = []
    this.adminService.getData().subscribe(res=>{ 
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
    this.adminService.postData(this.formdata.value).subscribe((res:any)=>{
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
this.adminService.deleteData(data.username).subscribe((res:any)=>{  
  console.log(res)
})
}

onUpdate(){
 this.adminService.modifyData(this.formdata.value,this.listOfData[this.indexselectedtoEdit]['_id']).subscribe(res=>{
  this.loadData()
  this.isedit = false;
  this.formdata.reset();
 })

} 
}
