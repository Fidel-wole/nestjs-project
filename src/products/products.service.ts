/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductInterface } from './product.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product')
    private readonly productModel: Model<ProductInterface>,
  ) {}
  async insertProduct(data: any) {
    try {
      const addProduct = await this.productModel.create(data);
      return addProduct;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  async getProducts() {
    try {
      const products = this.productModel.find();
      return products;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
  async getSingleProduct(prodId: any) {
    let product;
    try {
      product = await this.productModel.findById(prodId);
    } catch (err: any) {
      throw new NotFoundException('Product not found');
    }
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }
}
