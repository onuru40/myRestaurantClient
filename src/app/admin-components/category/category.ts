import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.html',
  styleUrl: './category.css'
})

export class Category {

title="Kategoriler Başlığı";

category ={id:1,name:'Kategori 1'}

categoryList = [
  {id:5,name:'Kategori 1'},
  {id:7,name:'Kategori 2'},
  {id:9,name:'Kategori 3'},
  {id:10,name:'Kategori 4'},
  {id:11,name:'Kategori 5'}
]

}
