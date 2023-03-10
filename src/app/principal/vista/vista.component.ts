import { Component } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent {

    // CONSUMIR SERVICIO UserServices

    // Crear instancia de UserServices
    constructor(private userService: UserserviceService){}

    // Ejecutar el metodo getuserAll del servicio al cargar el componente

    listado = new Array();

    ngOnInit(){
    // Ejecutar el metodo getUsersAll y recuperar json por la api

    //   this.userService.getUsersAll().subscribe({
    //     next: (UserAll: Users[]) => this.listado = UserAll,
    //     error: (e) => console.error(e),
    //     complete: () => console.info("La API devolvio todos los registro")
    //   });


    //Ejecutar el metodo getUserAllInterceptor

      this.userService.getUsersAllInterceptor().subscribe({
        next: (response: any) => {this.listado = response.body; console.log(response)},
        error: (e) => console.error(e),
        complete: () => console.info("La API devolvio todos los registro")
      });
    }

}


