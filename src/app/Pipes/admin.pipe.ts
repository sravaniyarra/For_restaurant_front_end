import { Pipe, PipeTransform } from '@angular/core';
import { Admin } from '../models/admin';

@Pipe({
  name: 'admin'
})
export class AdminPipe implements PipeTransform {

  transform(listofdata : Admin[],searchValue:string): Admin[] {
    if(!listofdata || !searchValue){
        return listofdata;
    }
   return listofdata.filter(customer => customer.username?.toLocaleLowerCase().includes(searchValue?.toLocaleLowerCase()))    
 }

}
