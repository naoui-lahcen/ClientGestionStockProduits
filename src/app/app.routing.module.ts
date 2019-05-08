import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProduitResolver } from './produit/produit.resolver';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    {
      path: 'login', 
      component: LoginComponent
    },
    {
    path: 'home', 
    component: HomeComponent
    },
    { 
      path: 'produit', component: ProduitComponent ,
      resolve: {
        produits: ProduitResolver
      }
    },
    {
       path: 'dashboard', 
       component: DashboardComponent
    },
    { 
      path: '',
       redirectTo: 'home',
        pathMatch: 'full' 
      }
  
  ];
  
@NgModule({
    imports: [
        RouterModule.forRoot(
          appRoutes,
          {enableTracing: false}
        )
      ],
      exports: [RouterModule],
      providers: [ProduitResolver]
})
export class AppRoutingModule{

}