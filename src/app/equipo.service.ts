import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipo:any [] = [ 
    {nombre: 'Samuel Framarini',
    especialidad:'HTML',
    descripcion: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna al    traces. Ut enim ad minim veniam, e ea commodo consequat. Ut en',
  },
  {nombre: 'Pamela Gabutto',
    especialidad:'CSS',
    descripcion: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna al    traces. Ut enim ad minim veniam, e ea commodo consequat. Ut en',
  }

  ]
  constructor() { 
    console.log('Funcionando servicio')
  }
  obtenerEquipo() {
    return this.equipo
  }
}
