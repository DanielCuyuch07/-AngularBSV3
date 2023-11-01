/*Dependencia de lado de angular */
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

/*Dependencias creadas */
import { UserModel } from 'src/app/models/user.model';
import { UserServicesService } from 'src/app/services/user-services.service';
import { CustomValidators } from 'src/validators/CustomValidators';
import { functions } from 'src/app/utils/functions';


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
    this.functions.registerUser(this.modelCustomer);
  }


  constructor(private formBuilder: FormBuilder,
    private userServices: UserServicesService,
    private functions: functions,
    private router: Router) {
    this.modelCustomer = new UserModel('', '', '', '', '', 'CLIENT');
  }

  ngOnInit(): void {
  }

}