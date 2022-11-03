export class Admin {
    id:number;
   username: string;
    email:string;
    password: string;
   phonenumber: number;
    
    
    
    constructor(id:any,username:any, email:string,password:string,phonenumber: number){
        this.id = id
        this.username =username
        this.email =  email
        this.password = password
        this.phonenumber = phonenumber
       
        
    }

}