import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { productsUrl } from 'src/app/config/api';

import { Product } from 'src/app/models/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public serach = new BehaviorSubject<string>("")

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products')
    .pipe(map((res:any)=>{
      return res;
    }))
  } 
  deleteProducts(_id:any){
      return this.http.delete<any>("http://localhost:3000/products/"+_id)
      .pipe(map((res:any)=>{
        return res
      }))
  }  
  createProduct(productBody):Observable<Product[]>{
    console.log('data' , productBody)
    return this.http.post<Product[]>(productsUrl,productBody).pipe(map((res:any) =>{
      return res
    }
    ))
  } 
   updateProduct(id,body){
    return this.http.post(`http://localhost:3000/products/updateProduct/${id}`,body)
   }
}
