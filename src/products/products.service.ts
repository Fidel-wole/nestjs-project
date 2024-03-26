/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./product.module";

@Injectable()
export class ProductService{
   private products:Product[] = [];

    insertProduct(title:string, desc:string, price:string){
        const prodId = Math.random()
        const newProduct = new Product(prodId, title, desc, price)
        this.products.push(newProduct);
        return prodId;
    }

    getProducts(){
        return [...this.products];
    }    
    getSingleProduct(prodId:any){
        const product = this.products.find(prod => prod.id == prodId);
        if(!product){
            throw new NotFoundException("Product not found")
        }
        return product
    }
}