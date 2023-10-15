import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { EntidadMaestrosComponent } from './component/entidad-maestros/entidad-maestros.component';
import { EntidadUsuariosComponent } from './component/entidad-usuarios/entidad-usuarios.component';

const routes: Routes = [

  { path: '', component: EntidadUsuariosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'maestros', component: EntidadMaestrosComponent },
  { path: 'usuarios', component: EntidadUsuariosComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
