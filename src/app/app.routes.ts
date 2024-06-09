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
  },
  {
    path: "account",
    loadComponent: () => import("./pages/user/user.component").then(m => m.UserComponent)
  },
  {
    path: "not-account",
    loadComponent: () => import("./components/user/not-account/not-account.component").then(m => m.NotAccountComponent)
  }
];
