import { Injectable } from '@angular/core';
import { listaAsignatura } from './asignatura.json';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  // listaEstudiantesService = ListaEstudiantes;

  constructor() { }

  listaAsignatura():any{
    return listaAsignatura;
  }
}
