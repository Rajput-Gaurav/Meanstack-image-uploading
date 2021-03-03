import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { AddImageService } from '../../services/add-image.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: any = [];

  constructor(private imageService: AddImageService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.imageService.getAllProduct()
      .subscribe(
        (async (data: any) => {
          console.log("Get All Products: ", data);
          this.products = (data && data.data) ? data.data : [];
        })
      );
  }

}
