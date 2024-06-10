import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "home",
    redirectTo: ""
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
    path: "about",
    loadComponent: () => import("./pages/about/about.component").then(m => m.AboutComponent)
  },
  {
    path: "account",
    loadComponent: () => import("./pages/user/user.component").then(m => m.UserComponent),
    canActivate: [authGuard]
  },
];
