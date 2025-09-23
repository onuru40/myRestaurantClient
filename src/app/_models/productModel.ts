import { CategoryModel } from "./categoryModel";

export class ProductModel{
  id:number;
  name:string;
  description;
  price;
  imageUrl;
  categoryId;
  category:CategoryModel;
}
