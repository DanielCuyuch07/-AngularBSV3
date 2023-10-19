/*Carpetas por Defecto de angular*/
import { Component, OnInit, ViewChild, } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { DateAdapter } from '@angular/material/core';


/*Sub carpetas*/
import { UserModel } from 'src/app/models/user.model';
import { CustomValidators } from 'src/validators/CustomValidators';
import { UserServicesService } from 'src/app/services/user-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-doc-semanal',
  templateUrl: './doc-semanal.component.html',
  styleUrls: ['./doc-semanal.component.css']
})


export class DocSemanalComponent implements OnInit {
  /*****************************
   * 
   * ****  Variables *********
   * 
  ******************************/
  modUser: UserModel;
  selectedDate: Date;



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

  constructor(private formBuilder: FormBuilder,
    private userServices: UserServicesService,
    private router: Router, private dateAdapter: DateAdapter<Date>) {
    this.modUser = new UserModel('', '', '', '', '', 'CLIENT');
    this.selectedDate = new Date();
    this.dateAdapter.setLocale('es-Es');
  }

  ngOnInit(): void {
  }

}
