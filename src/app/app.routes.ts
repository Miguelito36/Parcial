import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoUsuariosComponent } from './components/listado-usuarios/listado-usuarios.component';
import { DetalleUsuarioComponent } from './components/detalle-usuarios/detalle-usuarios.component';

const routes: Routes = [
  { path: 'usuarios', component: ListadoUsuariosComponent },
  { path: 'usuario/:id', component: DetalleUsuarioComponent },
  { path: '', redirectTo: '/usuarios', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }