import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { UserServicesService } from 'src/app/services/user-services.service';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

declare var bootstrap: any; // Declarar Bootstrap para que Angular lo reconozca




@Component({
  selector: 'app-entidad-usuarios',
  templateUrl: './entidad-usuarios.component.html',
  styleUrls: ['./entidad-usuarios.component.css']
})
export class EntidadUsuariosComponent implements OnInit {
  modelUser: UserModel;
  task: any[];
  userUpdate: any;



  isOffcanvasOpen = false;



  constructor(private userRest: UserServicesService) {
    this.modelUser = new UserModel('', '', '', '', '', 'CLIENT');
    this.task = [];  // Definimos searchUser como un array
    this.userUpdate = { name: '', email: '', username: '', password: '' }; // Inicializamos userUpdate

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

  userDelete(id: string) {
    Swal.fire({
      title: '¿Estás seguro de que deseas eliminar el usuario?',
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
        this.userRest.deleteUser(id).subscribe({
          next: (res: any) => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Usuario eliminado con exito',
              showConfirmButton: false,
              timer: 1000
            })
            this.getUser();
          },
          error: (err) => Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.error.message,
            showConfirmButton: false,
            timer: 1000
          }),
        });
      }
    })
  }



  updateUsers() {
    console.log('Datos del usuario a actualizar:', this.userUpdate);

    this.userRest.updateUser(this.userUpdate._id, this.userUpdate).subscribe({
      next: (res: any) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: res.message,
          showConfirmButton: false,
          timer: 1000
        });
        this.getUser();
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


  /*2*/
  public downloadPDF() {
    const DATA: any = document.getElementById('htmlData');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(DATA, options).then((canvas) => {
      const img = canvas.toDataURL('image/PNG');
      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}_tutorial.pdf`);
    });
  }



  ngOnInit(): void {
    this.getUser();
  }
}
