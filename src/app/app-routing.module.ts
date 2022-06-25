import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignaturaComponent } from './asignatura/asignatura.component';
import { EstudianteComponent } from './estudiante/estudiante.component';

const routes: Routes = [

  {
    path:'',
    component:AsignaturaComponent
  },
  {
    path:'estudiantes',
    component:EstudianteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
