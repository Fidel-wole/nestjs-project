/* eslint-disable prettier/prettier */
import { Injectable} from '@nestjs/common';
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
      return this.productModel.find();
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
  async getSingleProduct(prodId: any) {
    try {
      const product = this.productModel.findById(prodId);
      return product;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}
