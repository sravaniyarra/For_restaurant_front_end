import { Pipe, PipeTransform } from '@angular/core';
import { Customers } from '../models/customers';


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(listofdata : Customers[],searchValue:string): Customers[] {
     if(!listofdata || !searchValue){
         return listofdata;
     }
    return listofdata.filter(customer => customer.email?.toLocaleLowerCase().includes(searchValue?.toLocaleLowerCase()))    
  }

}
