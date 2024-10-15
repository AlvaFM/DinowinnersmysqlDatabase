import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {  

  Usersopdate: any[] = [];
  nuevoUsuario = {
    nombre: '',
    email: '',
    password: '',
    tipo_usuario: ''
  };

  Users: any[] = [];  

  constructor(private servis: ServiciosService) {}

  ngOnInit() {
    this.cargarUsuarios();  
  }

  cargarUsuarios() {
    this.servis.obtenerUsuarios().subscribe(
      (data) => {
        console.log('Datos obtenidos:', data);  
        this.Users = data;  
      },
      (error) => {
        console.error('Error al cargar usuarios:', error);  
      }
    );
  }

  subirUsuario() {
    this.servis.agregarUsuario(
      this.nuevoUsuario.nombre,
      this.nuevoUsuario.email,
      this.nuevoUsuario.password,
      this.nuevoUsuario.tipo_usuario
    ).subscribe(
      (response) => {
        console.log('Usuario agregado', response);
        alert('Usuario agregado correctamente'); // Mensaje de éxito
        this.cargarUsuarios(); // Recargar la lista de usuarios
      },
      (error) => {
        console.error('Error al agregar usuario:', error);
        alert('Error al agregar el usuario'); // Mensaje de error
      }
    );
}

}
