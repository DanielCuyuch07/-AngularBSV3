/*Dependencia de lado de angular */
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

/*Dependencias creadas */
import { UserModel } from 'src/app/models/user.model';
import { UserServicesService } from 'src/app/services/user-services.service';
import { CustomValidators } from 'src/validators/CustomValidators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  /*****  Variables **********/
  modelCustomer: UserModel;


  userForm = this.formBuilder.group({
    name: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    contrasenia: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        CustomValidators.onlyNumbers
      ]
    ]
  });

  isValidField(field: string): string {
    const validateField = this.userForm.get(field);

    return (!validateField?.valid && validateField?.touched)
      ? 'is-invalid' : validateField?.touched ? 'is-valid' : '';
  }


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
        this.userServices.register(this.modelCustomer).subscribe({
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

  constructor(private formBuilder: FormBuilder,
    private userServices: UserServicesService,
    private router: Router) {
    this.modelCustomer = new UserModel('', '', '', '', '', 'CLIENT');
  }

  ngOnInit(): void {
  }

}