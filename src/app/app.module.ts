import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { MatDatepickerModule } from '@angular/material/datepicker';

/*Angular material*/

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { EntidadUsuariosComponent } from './component/entidad-usuarios/entidad-usuarios.component';
import { EntidadClasesComponent } from './component/entidad-clases/entidad-clases.component';
import { EntidadGradosComponent } from './component/entidad-grados/entidad-grados.component';
import { EntidadMaestrosComponent } from './component/entidad-maestros/entidad-maestros.component';
import { EntidadUniformesComponent } from './component/entidad-uniformes/entidad-uniformes.component';
import { EntidadGenerosComponent } from './component/entidad-generos/entidad-generos.component';
import { EntidadDepartamentosComponent } from './component/entidad-departamentos/entidad-departamentos.component';
import { EntidadProductosComponent } from './component/entidad-productos/entidad-productos.component';
import { SubmenuComponent } from './component/submenu/submenu.component';
import { EntidadUserArchivosComponent } from './component/entidad-user-archivos/entidad-user-archivos.component';
import { SubmenuUserClientComponent } from './component/submenu-user-client/submenu-user-client.component';
import { DocSemanalComponent } from './component/doc-semanal/doc-semanal.component';  // Asegúrate de importar MatIconModule
import { MatNativeDateModule } from '@angular/material/core';
import { HomeComponent } from './component/home/home.component';
import { CalificacionesComponent } from './component/calificaciones/calificaciones.component';





@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EntidadUsuariosComponent,
    EntidadClasesComponent,
    EntidadGradosComponent,
    EntidadMaestrosComponent,
    EntidadUniformesComponent,
    EntidadGenerosComponent,
    EntidadDepartamentosComponent,
    EntidadProductosComponent,
    SubmenuComponent,
    EntidadUserArchivosComponent,
    SubmenuUserClientComponent,
    DocSemanalComponent,
    HomeComponent,
    CalificacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    MatDatepickerModule,
    MatInputModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    MatNativeDateModule
    // Añade MatIconModule a la lista de módulos importados
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
