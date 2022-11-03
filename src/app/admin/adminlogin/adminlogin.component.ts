import { Component, OnInit ,NgModule} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgForm,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css'] 
})
export class AdminloginComponent implements OnInit {

  public loginForm! : FormGroup

  constructor(private formBuilder : FormBuilder,private http:HttpClient , private router:Router ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  login(){
    this.http.get<any>("http://localhost:3000/Admin-signup").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      })
      if(user){
        alert("Login Successfull")
        this.loginForm.reset();
        this.router.navigate(['adminmain'])
      }
      else{
        alert("User not found ")
      }

    })
  }

}
