import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';

@Component({
    templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    pageTitle:string = "Product Details";
    product: IProduct;

    constructor(private _route: ActivatedRoute,
                private _router: Router){
    }

    ngOnInit(): void{
        let id = +this._route.snapshot.params['id']; //+ is shortcut to convert string to number
        this.pageTitle += ' : '+id;
    }

    onBack(): void{
        this._router.navigate(['/products']);
    }
}