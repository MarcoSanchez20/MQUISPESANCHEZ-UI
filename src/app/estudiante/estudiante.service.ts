import { Injectable } from '@angular/core';
import { ListaEstudiantes } from './estudiante.json';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

 // listaEstudiantesService = ListaEstudiantes;

  constructor() { }

  listaEstudiantes():any{
    return ListaEstudiantes;
  }
}
