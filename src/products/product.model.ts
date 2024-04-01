/* eslint-disable prettier/prettier */
import { Schema } from "mongoose";
export const ProductSchema = new Schema({
title:{type:String, required:true},
description:{type:String, required:true},
price:{type:String, required:true}
});
export interface ProductInterface {
    id?:string,
    title:string,
    description:string,
    price:string
}