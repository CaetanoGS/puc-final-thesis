import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginGuard } from './login/login.guard';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    pathMatch: "full"
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [LoginGuard],
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "login",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
