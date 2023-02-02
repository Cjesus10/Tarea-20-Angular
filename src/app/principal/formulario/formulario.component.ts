import { Component } from '@angular/core';
import { Comments, Users } from 'src/app/models/users';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  constructor(private userService: UserserviceService){}

  // Crar objeto que se enviara a la api
  datos: Comments = {postId:'', id:'', name:'', email:'', body:''};
  mostrar = false;

  onSubmit(){
    this.mostrar = true;
    this.userService.postUser(this.datos).subscribe(
      (usuario: Comments) => console.log(usuario)
    );
  }
}
// postId: string;
//     id: string;
//     name: string;
//     email: string;
//     body: string;