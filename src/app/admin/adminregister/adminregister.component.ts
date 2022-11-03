import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.css']
})
export class AdminregisterComponent implements OnInit {

  public signupForm !:FormGroup;
  constructor(private formBuilder :FormBuilder,private http:HttpClient, private router:Router){}
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      username:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      phonenumber:['',Validators.required]
    })
  }
  signup(){
    this.http.post<any>("http://localhost:3000/Admin-signup",this.signupForm.value)
    .subscribe(res=>{
      alert("Registration Successfull")
      this.signupForm.reset();
      this.router.navigate(['adminlogin'])
    },err=>{
      alert("Something went wrong")
    }
    )
  }

}
