/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './products.service';
import { ProductInterface } from './product.model';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductService) {}
  @Post()
  addProduct(
    @Body('title') prodTitle: string,
    @Body('desc') prodDesc: string,
    @Body('price') prodPrice: string,
  ): any {
    const productData:ProductInterface = {
      title: prodTitle,
      description: prodDesc,
      price: prodPrice
    }
   const generatedId = this.productService.insertProduct(productData);
   return {id: generatedId};
  }

  @Get()
 getAllProducts(){
      return this.productService.getProducts();
  }

  @Get(':prodId')
  getSingleProduct(@Param('prodId') prodID:any){
return this.productService.getSingleProduct(prodID)
  }
}