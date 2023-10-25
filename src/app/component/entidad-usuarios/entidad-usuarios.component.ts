import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import { UserModel } from 'src/app/models/user.model';
import { UserServicesService } from 'src/app/services/user-services.service';

declare var bootstrap: any; // Declarar Bootstrap para que Angular lo reconozca

@Component({
  selector: 'app-entidad-usuarios',
  templateUrl: './entidad-usuarios.component.html',
  styleUrls: ['./entidad-usuarios.component.css']
})
  
export class EntidadUsuariosComponent implements OnInit {

  modelCustomer: UserModel;
  userRecords: any[];
  userUpdate: any;
  save: any;
  isOffcanvasOpen = false;




  getUser() {
    this.serverClient.getUsuarios().subscribe({
      next: (res: any) => {
        console.log('Respuesta del servidor:', res);
        this.userRecords = res.users;
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
        this.serverClient.deleteUser(id).subscribe({
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
    this.serverClient.updateUser(this.userUpdate._id, this.userUpdate).subscribe({
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



  public downloadPDF() {
    const DATA: any = document.getElementById('htmlData');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };

    // Agregar elementos al DATA
    const logo = new Image();
    logo.src = 'ruta_al_logo.png'; // Reemplaza con la ruta correcta de tu logo
    DATA.appendChild(logo);

    const instructions = document.createElement('div');
    instructions.innerHTML = '';
    DATA.appendChild(instructions);

    html2canvas(DATA, options).then((canvas) => {
      const img = canvas.toDataURL('image/PNG');
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');

      // Ahora, guarda el PDF después de agregar la imagen
      doc.save(`${new Date().toISOString()}_tutorial.pdf`);
    });
  }

  openPDFModal() {
    // Ruta del PDF que deseas mostrar en el modal
    const pdfUrl = 'ruta_del_pdf.pdf'; // Reemplaza con la ruta correcta del PDF

    // Obtén el iframe del modal
    const pdfIframe = document.getElementById('pdfIframe') as HTMLIFrameElement;

    // Establece la fuente del iframe para cargar el PDF
    pdfIframe.src = pdfUrl;

    // Abre el modal
    const pdfModal = new bootstrap.Modal(document.getElementById('pdfModal'));
    pdfModal.show();
  }

  

  constructor(private serverClient: UserServicesService) {
    this.modelCustomer = new UserModel('', '', '', '', '', 'CLIENT');
    this.userRecords = [];  
    this.userUpdate = { name: '', email: '', username: '', password: '' }; // Inicializamos userUpdate
  }

  ngOnInit(): void {
    this.getUser();
  }

}
