import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "create-account",
    loadComponent: () => import("./pages/create-account/create-account.component").then(m => m.CreateAccountComponent)
  },
  {
    path: "login",
    loadComponent: () => import("./pages/login/login.component").then(m => m.LoginComponent)
  }
];
