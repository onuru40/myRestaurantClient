import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../_models/productModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl ="https://localhost:7000/api/products/"

  constructor(private http:HttpClient){}

getAll(){
  return this.http.get<ProductModel[]>(this.baseUrl)
};

create(model:ProductModel){
return this.http.post<ProductModel>(this.baseUrl,model)
};

getById(id:number){
  return this.http.get<ProductModel>(this.baseUrl+id)
};

update(id:number,model:ProductModel){
  return this.http.put(this.baseUrl+id,model)
};

delete(id:number){
  return this.http.delete(this.baseUrl+id)
}

}
