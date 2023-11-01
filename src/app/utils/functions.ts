import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { UserServicesService } from '../services/user-services.service';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'src/validators/CustomValidators';

@Injectable({
    providedIn: 'root'
})

export class functions {
    userRecords: any[];


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


    registerUser(modelCustomer: any) {
        Swal.fire({
            title: '¿Estás seguro de que deseas crear el usuario?',
            text: 'Esta acción no se puede deshacer.',
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#28a745',
            confirmButtonText: 'Sí, crear usuario',
            cancelButtonColor: '#dc3545',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                this.userService.register(modelCustomer).subscribe({
                    next: (res: any) => {
                        this.showSuccessAlertAndNavigate();
                    },
                    error: (err) => {
                        this.showErrorAlert(err.message);
                    }
                });
            }
        });
    }

    private showSuccessAlertAndNavigate() {
        Swal.fire({
            position: 'center',
            title: 'Usuario creado exitosamente',
            icon: 'success',
            showConfirmButton: false,
            timer: 1000
        });
        this.router.navigateByUrl('/login');
    }

    private showErrorAlert(errorMessage: string) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: errorMessage,
            showConfirmButton: false,
            timer: 1000
        });
    }

    /**************************** Login ************************************/

    loginUser(modelCustomer: any) {
        this.userService.login(modelCustomer).subscribe({
            next: (res: any) => {
                this.handleLoginResponse(res);
            },
            error: (err) => {
                this.handleError(err);
            }
        });
    }

    private handleLoginResponse(response: any) {
        console.log('Response:', response);
        alert(response.message);

        localStorage.setItem('token', response.token);
        localStorage.setItem('identity', JSON.stringify(response.alreadyUse));

        this.redirectBasedOnRole(response.alreadyUse.role);
    }

    private handleError(error: any) {
        this.loginForm.reset(); // Utiliza el formulario 'loginForm' para resetearlo
        console.error('Error:', error);
        alert(error.error.message || error.error);
    }

    private redirectBasedOnRole(role: string) {
        if (role === 'CLIENT') {
            this.router.navigateByUrl('/subMenuClient');
        } else if (role === 'ADMIN') {
            this.router.navigateByUrl('/usuarios');
        } else {
            // Otros roles o lógica de redirección
        }
    }

    /***************** Funciones principales **********************/

    /*Mostrar usuario */
    getUser() {
        this.userService.getUsuarios().subscribe({
            next: (res: any) => {
                this.handleGetUserSuccess(res);
            },
            error: (err) => {
                this.handleGetUserError(err);
            }
        });
    }

    private handleGetUserSuccess(res: any) {
        console.log('Respuesta del servidor:', res);
        this.userRecords = res.users;
    }

    private handleGetUserError(err: any) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.error.message,
            showConfirmButton: false,
            timer: 1000
        });
    }



    /*Delete*/
    // userDelete(id: string) {
    //     Swal.fire({
    //         title: '¿Estás seguro de que deseas eliminar el usuario?',
    //         text: 'Esta acción no se puede deshacer.',
    //         icon: 'warning',
    //         showCancelButton: true,
    //         cancelButtonText: 'Cancelar',
    //         confirmButtonColor: '#28a745',
    //         confirmButtonText: 'Sí, eliminar usuario',
    //         cancelButtonColor: '#dc3545',
    //         reverseButtons: true,
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             this.deleteUserAndHandleResponse(id);
    //         }
    //     });
    // }

    // private deleteUserAndHandleResponse(id: string) {
    //     this.userService.deleteUser(id).subscribe({
    //         next: (res: any) => {
    //             this.handleDeleteSuccess();
    //         },
    //         error: (err) => {
    //             this.handleDeleteError(err);
    //         },
    //     });
    // }

    // private handleDeleteSuccess() {
    //     Swal.fire({
    //         position: 'center',
    //         icon: 'success',
    //         title: 'Usuario eliminado con éxito',
    //         showConfirmButton: false,
    //         timer: 1000,
    //     });
    // }

    // private handleDeleteError(err: any) {
    //     Swal.fire({
    //         icon: 'error',
    //         title: 'Oops...',
    //         text: err.error.message,
    //         showConfirmButton: false,
    //         timer: 1000,
    //     });
    // }

    showDeleteConfirmation(): Promise<any> {
        return Swal.fire({
            title: '¿Estás seguro de que deseas eliminar el usuario?',
            text: 'Esta acción no se puede deshacer.',
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#28a745',  // Color verde claro
            confirmButtonText: 'Sí, eliminar usuario',
            cancelButtonColor: '#dc3545',  // Color rojo
            reverseButtons: true  // Invierte el orden de los botones
        });
    }

    showSuccessAlert(message: string): void {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: message,
            showConfirmButton: false,
            timer: 1000
        });
    }

    showErrorrAlert(message: string): void {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: message,
            showConfirmButton: false,
            timer: 1000
        });
    }


    constructor(private userService: UserServicesService,
        private formBuilder: FormBuilder,
        private router: Router) {
        this.userRecords = [];
    }
}