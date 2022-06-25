import { Component, OnInit } from '@angular/core';
import { AsignaturaService } from './asignatura.service';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.component.html',
  styleUrls: ['./asignatura.component.css']
})
export class AsignaturaComponent implements OnInit {
  
  asignaturaLista: any;

  //Retorna lista de estudiantes directo del JSON sin pasar por el service
  //constructor() {
  //this.estudianteLista = ListaEstudiantes;
   //}

   constructor(private asignaturaService:AsignaturaService){
    this.asignaturaLista = this.asignaturaService.listaAsignatura();
    console.log(this.asignaturaLista);
   }

  ngOnInit(): void {
  }

}
