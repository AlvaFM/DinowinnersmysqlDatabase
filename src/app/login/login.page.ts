import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  Users: any[] = [];

  constructor(private servis: ServiciosService) { }

  ngOnInit() {

   
  }

  
  
}
