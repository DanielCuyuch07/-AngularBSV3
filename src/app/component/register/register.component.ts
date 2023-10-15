import { Component } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { UserServicesService } from 'src/app/services/user-services.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { FormGroupDirective } from '@angular/forms';

import { Router } from '@angular/router';
import { CustomValidators } from 'src/validators/CustomValidators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  modUser: UserModel;

  validatorsForm = this.formBuilder.group({
    name: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', Validators.required],
    contrasenia: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        CustomValidators.onlyNumbers
      ]
    ]
  });


  constructor
    (private formBuilder: FormBuilder,
      private userServices: UserServicesService,
      private router: Router
    ) {
    this.modUser = new UserModel('', '', '', '', '');
  }


  ngOnInit(): void {
  }

  /******************  Funciones *****************/

  register(registerForm: any) {
    Swal.fire({
      title: '¿Estás seguro de que deseas crear el usuario?',
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#28a745',  // Color verde claro
      confirmButtonText: 'Sí, crear usuario',
      cancelButtonColor: '#dc3545',  // Color rojo
      reverseButtons: true  // Invierte el orden de los botones
    }).then((result) => {
      if (result.isConfirmed) {
        // Si el usuario confirma, enviar la solicitud de registro
        this.userServices.register(this.modUser).subscribe({
          next: (res: any) => {
            Swal.fire({
              position: 'center',
              title: 'Usuario creado exitosamente',
              icon: 'success',
              showConfirmButton: false,
              timer: 1000
            });
            this.router.navigateByUrl('/login');
          },
          error: (err) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: err.message,
              showConfirmButton: false,
              timer: 1000
            });
          }
        });
      }
    });
  }
}