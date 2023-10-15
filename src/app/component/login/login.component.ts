import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { UserServicesService } from 'src/app/services/user-services.service';
import { CustomValidators } from 'src/validators/CustomValidators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  modelUser: UserModel;


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

  constructor(
    private formBuilder: FormBuilder,
    private userRest: UserServicesService,
    private router: Router

  ) {
    this.modelUser = new UserModel('', '', '', '', '')
  }

  login(FormLogin: any) {
    this.userRest.login(this.modelUser).subscribe({
      next: (res: any) => {
        alert(res.message);
        localStorage.setItem('token', res.token);
        localStorage.setItem('identity', JSON.stringify(res.already));
        this.router.navigateByUrl('/usuarios');
      },
      error: (err) => {
        FormLogin.reset();
        return alert(err.error.message || err.error)
      }
    })
  }
}
