import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

//servicios
import { EquipoService } from './equipo.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FooterComponent } from './footer/footer.component';
import { CursosComponent } from './cursos/cursos.component';
import { DatospersonalesComponent } from './datospersonales/datospersonales.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  { path: 'contacto', component: ContactoComponent },
  { path: 'experiencia', component: ExperienciaComponent },
  { path: 'cursos', component: CursosComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    ExperienciaComponent,
    CabeceraComponent,
    FooterComponent,
    CursosComponent,
    DatospersonalesComponent,
    BarraNavegacionComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(routes)
  ],
  providers: [EquipoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
