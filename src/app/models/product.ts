export class Product {
    name: string;
    category:string;
    description: string;
    price: number;
    imageUrl: string; 
    qty:number;
    
    
    constructor(name:any,category:string,description='',qty=0,price=0,imageUrl= "src/assets/images/1610716314_untitled-design-2021-01-15t184025.049.avif"){
        this.name = name
        this.category = category
        this.description = description
        this.price = price
        this.imageUrl = imageUrl
        this.qty = qty
        
    }
} 
