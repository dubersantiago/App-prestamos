import { Component } from '@angular/core';
import { UserListComponent } from '../../components/user-list/user-list.component';


@Component({
  selector: 'app-usuarios',
  imports: [UserListComponent],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
  
}
