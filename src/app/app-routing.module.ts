import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { EntidadMaestrosComponent } from './component/entidad-maestros/entidad-maestros.component';
import { EntidadUsuariosComponent } from './component/entidad-usuarios/entidad-usuarios.component';
import { UserGuard } from './guards/user.guard';
import { AdminGuard } from './guards/admin.guard';
import { EntidadUserArchivosComponent } from './component/entidad-user-archivos/entidad-user-archivos.component';
import { SubmenuUserClientComponent } from './component/submenu-user-client/submenu-user-client.component';
import { DocSemanalComponent } from './component/doc-semanal/doc-semanal.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'archivos', component: EntidadUserArchivosComponent, },
  { path: 'maestros', component: EntidadMaestrosComponent },
  { path: 'subMenuClient', component: SubmenuUserClientComponent },
  { path: 'document', component: DocSemanalComponent },
  { path: 'usuarios', component: EntidadUsuariosComponent, }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
