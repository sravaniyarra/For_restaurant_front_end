import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Customers } from '../models/customers';

@Injectable({
  providedIn: 'root'
})
export class CustomersService { 

  constructor(private http:HttpClient) { }
 
  getData():Observable<Customers[]>{ 
    return this.http.get<Customers[]>('http://localhost:3000/Sign-up')
    .pipe(map((res:any)=>{
      return res;
    }))
      
 
  } 
  postData(bodydata):Observable<Customers[]>{
    console.log('data' , bodydata)
    return this.http.post<Customers[]>('http://localhost:3000/Sign-up/post',bodydata).pipe(map((res:any) =>{
      return res
    })
  )}
  deleteData(_id){
    return this.http.delete(`http://localhost:3000/Sign-up/delete/${_id}`)
    .pipe(map((res:any)=>{
      return res;}))
  }
  modifyData(data,id){
    return this.http.put(`http://localhost:8000/Sign-up/update/${id}`,data)
   }


}
 