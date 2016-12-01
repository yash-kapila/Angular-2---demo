import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = '';
    products: IProduct[];

    constructor(private _productService: ProductService){
         
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onNotify(message: string): void {
        console.log("Output from child" + message);
    }

    ngOnInit(): void{
        this.products = this._productService.getProducts();
    }
}