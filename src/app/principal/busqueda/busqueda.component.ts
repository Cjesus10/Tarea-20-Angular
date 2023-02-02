import { Component } from '@angular/core';
import { Comments, Users } from 'src/app/models/users';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  // CONSUMIR SERVICIO UserServices

  // Crear instancia de UserServices
  constructor(private userService: UserserviceService){}

  resultado = true;
  user!: Comments | null;

  // Ejecutar el metodo getUsersAll del servicio al cargar el componente
  getUserID(id: string){
  this.resultado = true;
  this.user = null;
  this.userService.getUserId(id).subscribe({
  next: (usuario: Comments) => this.user = usuario,
  error: (e) => {console.error(e); this.resultado = false;},
  complete: () => console.info("La API devolvio un registro")
  });
  }
}
