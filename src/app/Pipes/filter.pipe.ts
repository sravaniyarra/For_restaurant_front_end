import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(listofdata : Product[],searchValue:string): Product[] {
    if(!listofdata || !searchValue){
        return listofdata;
    }
   return listofdata.filter(customer => customer.description?.toLocaleLowerCase().includes(searchValue?.toLocaleLowerCase()))    
 }
  }

