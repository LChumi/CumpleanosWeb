import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/pages/dashboard/dashboard.component';
import { LoginComponent } from './modules/home/login/login.component';
import { BodegasComponent } from './modules/pages/consultas/bodegas/bodegas.component';
import { ProductosComponent } from './modules/pages/consultas/productos/productos.component';

const routes: Routes = [
  {path:'',redirectTo:'/inicio',pathMatch:'full'},
  {path:'inicio',component:DashboardComponent},
  {path:'login',component:LoginComponent},
  {path:'bodegas',component:BodegasComponent},
  {path:'consulta',component:ProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
