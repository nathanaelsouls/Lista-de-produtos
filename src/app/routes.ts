import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";
import { ProductListComponent } from "./product-list/product-list.component";

const routeConfig: Routes = [
    { 
        path: '', 
        component: HomeComponent, 
        title: 'Home page',
    },
    { 
        path: 'home', 
        component: HomeComponent, 
        title: 'Home page',
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Home details',
    },
    {
        path: 'product',
        component: ProductListComponent,
        title: 'Product list',
    },
];

export default routeConfig;