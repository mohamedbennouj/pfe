import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/guard/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forgotpwd',
    loadChildren: () => import('./forgotpwd/forgotpwd.module').then( m => m.ForgotpwdPageModule)
  },
  {
    path: 'monument',
    loadChildren: () => import('./monument/monument.module').then( m => m.MonumentPageModule)
  },
  {
    path: 'all',
    loadChildren: () => import('./all/all.module').then( m => m.AllPageModule)
  },
  {
    path: 'culture',
    loadChildren: () => import('./culture/culture.module').then( m => m.CulturePageModule)
  },
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.module').then( m => m.ShopPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
