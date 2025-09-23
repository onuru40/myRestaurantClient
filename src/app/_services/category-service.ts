import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryModel } from '../_models/categoryModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl = "https://localhost:7000/api/categories/"
  /**
   *
   */
  constructor(private http:HttpClient) {

  }

  getAll(){
     return this.http.get<CategoryModel[]>(this.baseUrl);
  }

  create(model:CategoryModel) {
    return this.http.post<CategoryModel>(this.baseUrl,model)
  }

  update(model:CategoryModel){
    return this.http.put(this.baseUrl+model.id,model)
  }

  delete(id:number){
    return this.http.delete(this.baseUrl+id)
  }

}
