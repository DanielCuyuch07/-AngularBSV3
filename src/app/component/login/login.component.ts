import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserModel } from 'src/app/models/user.model';
import { UserServicesService } from 'src/app/services/user-services.service';
import { CustomValidators } from 'src/validators/CustomValidators';
import { functions } from 'src/app/utils/functions';


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
    this.functions.loginUser(this.modelCustomer);
  }


  constructor(
    private formBuilder: FormBuilder,
    private userRest: UserServicesService,
    private functions: functions,
    private router: Router

  ) {
    this.modelCustomer = new UserModel('', '', '', '', '', 'CLIENT')
  }

  ngOnInit(): void {
  }
}
