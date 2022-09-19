import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FooterComponent } from './footer/footer.component';
import { CursosComponent } from './cursos/cursos.component';
import { DatospersonalesComponent } from './datospersonales/datospersonales.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperienciaComponent,
    CabeceraComponent,
    FooterComponent,
    CursosComponent,
    DatospersonalesComponent,
    BarraNavegacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
