/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'
import { AppService } from './app.service';
//import { ProductsController } from './products/product.controller';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule, MongooseModule.forRoot('mongodb+srv://nestjs:wiNHV9rqFZwJQlDa@cluster0.cwzz5uc.mongodb.net/nestjs')],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
