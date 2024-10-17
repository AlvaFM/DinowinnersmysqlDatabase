// servicios.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private apiUrl = 'http://localhost:3000/api';  
  constructor(private http: HttpClient) { }

  // Método para obtener todos los usuarios
  obtenerUsuarios(): Observable<any> {
    return this.http.get(`${this.apiUrl}/data`);  
  }

  // Método para agregar un nuevo usuario
  agregarUsuario(nombre: string, email: string, password: string, tipo_usuario: string): Observable<any> {
    const usuario = { nombre, email, password, tipo_usuario };
    return this.http.post(`${this.apiUrl}/usuarios`, usuario); // Cambia aquí
  }
}
