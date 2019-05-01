import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './pages/landing/landing.component';
import {ThemeTestComponent} from './pages/theme-test/theme-test.component';
import {SignInComponent} from './pages/sign-in/sign-in.component';
import {Msi2019Component} from './pages/msi2019/msi2019.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: LandingComponent},
  {path: 'theme-test', component: ThemeTestComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'msi-2019', component: Msi2019Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
