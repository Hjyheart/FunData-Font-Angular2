/**
 * Created by hongjiayong on 2017/3/8.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ErrorComponent} from "./error/error.componnet";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {TestComponent} from "./test/test.component";


const routes: Routes = [
  { path: '', redirectTo: '/introduction', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'test', component: TestComponent},
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
