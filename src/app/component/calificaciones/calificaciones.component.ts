/*Dependencia de lado de angular */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'src/validators/CustomValidators';

/*Dependencias creadas */


@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html',
  styleUrls: ['./calificaciones.component.css']
})
export class CalificacionesComponent implements OnInit {

  /*****************************
 * 
 * ****  Variables *********
 * 
******************************/


  /*---- Validacion de formularios -------*/
  validatorsForm = this.formBuilder.group({
    name: ['', Validators.required],
    dateTime: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    exportDoc: ['', Validators.required]
  });


  isValidField(field: string): string {
    const validateField = this.validatorsForm.get(field);

    return (!validateField?.valid && validateField?.touched)
      ? 'is-invalid' : validateField?.touched ? 'is-valid' : '';
  }




  /******************  Funciones *****************/


  constructor(private formBuilder: FormBuilder, private router: Router) {

  }

  ngOnInit(): void {

  }


}
