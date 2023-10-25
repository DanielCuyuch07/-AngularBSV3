import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserModel } from 'src/app/models/user.model';
import { UserServicesService } from 'src/app/services/user-services.service';
import { CustomValidators } from 'src/validators/CustomValidators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  modelCustomer: UserModel;
  ocultarConfirmacionContrasenia: boolean = true;
  ocultarContrasenia: boolean = true;


  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    contrasenia: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        CustomValidators.onlyNumbers
      ]
    ]
  });


  login(FormLogin: any) {
    this.userRest.login(this.modelCustomer).subscribe({
      next: (res: any) => {
        console.log('Response:', res);  // Verifica la respuesta del servidor
        alert(res.message);

        // Almacena el token y la identidad en localStorage
        localStorage.setItem('token', res.token);
        localStorage.setItem('identity', JSON.stringify(res.alreadyUse));

        // Redirecciona según el rol
        if (res.alreadyUse.role === 'CLIENT') {
          this.router.navigateByUrl('/subMenuClient');
        } else if (res.alreadyUse.role === 'ADMIN') {
          this.router.navigateByUrl('/usuarios');
        } else {
          // Otros roles o lógica de redirección
        }

      },
      error: (err) => {
        FormLogin.reset();
        console.error('Error:', err);  // Verifica si hay algún error
        return alert(err.error.message || err.error);
      }
    });
  }


  constructor(
    private formBuilder: FormBuilder,
    private userRest: UserServicesService,
    private router: Router

  ) {
    this.modelCustomer = new UserModel('', '', '', '', '', 'CLIENT')
  }

  ngOnInit(): void {
  }
}
