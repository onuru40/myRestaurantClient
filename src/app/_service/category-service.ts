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


}
