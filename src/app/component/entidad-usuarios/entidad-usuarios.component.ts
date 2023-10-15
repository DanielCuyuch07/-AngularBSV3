import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { UserServicesService } from 'src/app/services/user-services.service';
import Swal from 'sweetalert2';

declare var bootstrap: any; // Declarar Bootstrap para que Angular lo reconozca


@Component({
  selector: 'app-entidad-usuarios',
  templateUrl: './entidad-usuarios.component.html',
  styleUrls: ['./entidad-usuarios.component.css']
})
export class EntidadUsuariosComponent implements OnInit {
  modelUser: UserModel;
  task: any[];


  isOffcanvasOpen = false;



  constructor(private userRest: UserServicesService) {
    this.modelUser = new UserModel('', '', '', '', '');
    this.task = [];  // Definimos searchUser como un array

  }



  getUser() {
    this.userRest.getUsuarios().subscribe({
      next: (res: any) => {
        console.log('Respuesta del servidor:', res);
        this.task = res.users;  // Asignamos la lista de usuarios a searchUser
      },
      error: (err) => Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err.error.message,
        showConfirmButton: false,
        timer: 1000
      })
    });
  }


  ngOnInit(): void {

    this.getUser();
  }
}
