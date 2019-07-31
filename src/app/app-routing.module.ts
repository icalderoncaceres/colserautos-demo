import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolicitudComponent } from 'src/app/solicitud/solicitud.component';
import { VirtualComponent } from 'src/app/virtual/virtual.component';
import { RecepcionComponent } from 'src/app/recepcion/recepcion.component';
import { InspeccionComponent } from 'src/app/inspeccion/inspeccion.component';


const routes: Routes = [
  {
    path: 'setSolicitud',
    component: SolicitudComponent
  },
  {
    path: 'setVirtuales',
    component: VirtualComponent
  },
  {
    path: 'inspecciones',
    component: InspeccionComponent
  },
  {
    path: 'recepciones',
    component: RecepcionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
