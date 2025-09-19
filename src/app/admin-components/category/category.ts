import { CategoryModel } from '../../_models/categoryModel';
import { CategoryService } from './../../_service/category-service';
import { Component, model } from '@angular/core';

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.html',
  styleUrl: './category.css'
})

export class Category {

constructor(private categoryService: CategoryService){
  this.getCategories()
}
categories:CategoryModel[];
newCategory:CategoryModel = new CategoryModel();
editCategory:CategoryModel = new CategoryModel();

getCategories(){
  this.categoryService.getAll().subscribe({
    next: values => this.categories = values,
    error: err=> console.log(err)
  })
};

create(){
  this.categoryService.create(this.newCategory).subscribe({
    next: value => this.categories.push(value),
    error: err=> console.log(err)
  })
};

onSelected(model:CategoryModel){
this.editCategory = model;
};

update(){
  this.categoryService.update(this.editCategory).subscribe({
    error: err=> console.log(err),
    complete: () => this.getCategories()
  })
};

delete(id:number){
  this.categoryService.delete(id).subscribe({
    error: err => console.log(err),
    complete: () => this.getCategories()
  })
}

}
