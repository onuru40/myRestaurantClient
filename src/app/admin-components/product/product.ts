import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../_services/product-service';
import { ProductModel } from '../../_models/productModel';
import Swal from 'sweetalert2';
import { CategoryModel } from '../../_models/categoryModel';
import { CategoryService } from '../../_services/category-service';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product implements OnInit {

constructor(private productService:ProductService,
            private categoryService:CategoryService
){

}
products:ProductModel[];
categories:CategoryModel[];
newProduct:ProductModel= new ProductModel();
editProduct:ProductModel= new ProductModel();

ngOnInit(): void {
  this.getAll();
  this.getCategories();
}


getAll(){
  this.productService.getAll().subscribe({
    next: values => this.products=values,
    error: err => console.log(err)
  })
};

getCategories(){
  this.categoryService.getAll().subscribe({
    next: values => this.categories= values,
    error: err=> console.log(err)
  })
};

create(){
  this.productService.create(this.newProduct).subscribe({
    next: value => this.products.push(value),
    error: err=>{
      console.log(err);

      Swal.fire({
        title:'Ürün eklenirken bir hata oluştu',
        icon:'error',
        timer:1500
      })

    } ,
    complete: () => Swal.fire({
      title:'Yeni Ürün Eklendi',
      icon:'success',
      timer: 1500
    })
  })
};


update(){
  this.productService.update(this.editProduct.id,this.editProduct).subscribe({
    error: err =>{
      console.log(err);
      Swal.fire({
        title:'Ürün güncellenirken bir hata oluştu',
        icon:'error',
        timer:1500
      })
    },
    complete: () => Swal.fire({
      title:'Ürün başarıyla güncellendi',
      icon:'success',
      timer:1500
    })
  })
};


delete(id:number){

  Swal.fire({
    title:'Silmek istediğinize emin misiniz?',
    text: 'Bu işlemi geri alamazsınız',
    icon: 'question',
    confirmButtonText:'Evet, Sil',
    cancelButtonText: 'İptal',
    showCancelButton: true

  }).then(result=>{
    if(result.isConfirmed){
      this.productService.delete(id).subscribe({
        error: err=> console.log(err),
        complete: ()=>  {Swal.fire({
        title:'Ürün başarıyla silindi',
        icon:'success',
        timer:1500
      });
    this.getAll()
    }
      })
    }
  })




}

onSelected(model:ProductModel){
this.editProduct=model;
}





}
