import { Component, OnInit, } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DateAdapter } from '@angular/material/core';


/*Sub carpetas*/
import { UserModel } from 'src/app/models/user.model';
import { UserServicesService } from 'src/app/services/user-services.service';


@Component({
  selector: 'app-doc-semanal',
  templateUrl: './doc-semanal.component.html',
  styleUrls: ['./doc-semanal.component.css']
})


export class DocSemanalComponent implements OnInit {
  /******  Variables **********/
  modelCurtomer: UserModel;
  selectedDate: Date;


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
    private serverClient: UserServicesService,
    private router: Router, private dateAdapter: DateAdapter<Date>) {
    this.modelCurtomer = new UserModel('', '', '', '', '', 'CLIENT');
    this.selectedDate = new Date();
    this.dateAdapter.setLocale('es-Es');
  }

  ngOnInit(): void {
  }
}
