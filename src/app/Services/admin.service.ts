import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, throwError } from 'rxjs';
import { Admin } from '../models/admin';
import { adminUrl } from '../config/api';
import { catchError} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
 
  getData():Observable<Admin>{
    return this.http.get('http://localhost:3000/Admin-signup')
    .pipe(map((res:any)=>{
      return res;
    }))
     

  } 
  postData(bodydata){
    console.log('data' , bodydata)
    return this.http.post('http://localhost:3000/Admin-signup',bodydata)
  } 
  deleteData(_id){
    return this.http.delete(`http://localhost:3000/Admin-signup/delete/${_id}`)}

  modifyData(data,id){
    return this.http.put(`http://localhost:3000/Admin-signup/update/${id}`,data)
   }

  }
