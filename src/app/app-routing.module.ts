import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';


const routes: Routes = [{
  path:'home',
  component:HomeComponent,
},{
  path:"",
  redirectTo:'home',
  pathMatch: 'full',
},{
  path:"**",
  component:NaoEncontradoComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
