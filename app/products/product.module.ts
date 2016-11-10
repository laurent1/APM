import {NgModule} from '@angular/core';

import {ProductDetailComponent} from "./product-detail.component";
import {ProductFilterPipe} from "./product-filter.pipe";
import {ProductListComponent} from "./product-list.component";
import {RouterModule} from "@angular/router";
import {ProductDetailGuard} from "./product-guard.service";
import {ProductService} from "./product.service";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
            { path: 'product/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent }
        ])

    ],
    exports: [],
    declarations: [
        ProductListComponent,
        ProductFilterPipe,
        ProductDetailComponent
    ],
    providers: [
        ProductService,
        ProductDetailGuard
    ],
})
export class ProductModule {
}

