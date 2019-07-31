import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { VirtualComponent } from './virtual/virtual.component';
import { InspeccionComponent } from './inspeccion/inspeccion.component';
import { RecepcionComponent } from './recepcion/recepcion.component';

@NgModule({
  declarations: [
    AppComponent,
    SolicitudComponent,
    VirtualComponent,
    InspeccionComponent,
    RecepcionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
