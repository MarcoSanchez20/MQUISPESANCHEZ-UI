import { Component, OnInit } from '@angular/core';
import { ListaEstudiantes } from './estudiante.json';
import { EstudianteService } from './estudiante.service';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {

  estudianteLista:any;


  //Retorna lista de estudiantes directo del JSON sin pasar por el service
  //constructor() {
  //this.estudianteLista = ListaEstudiantes;
   //}

   constructor(private estudianteService:EstudianteService){
    this.estudianteLista = this.estudianteService.listaEstudiantes();
    console.log(this.estudianteLista);
   }

  ngOnInit(): void {
  }

}
