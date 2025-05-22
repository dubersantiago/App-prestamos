import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserItemComponent } from "../../components/user-item/user-item.component";
import { UserService } from '../../services/UserService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, FormsModule, UserItemComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})

export class UserListComponent {
  userService=inject(UserService);
  router=inject(Router)
  usuarios=this.userService.getUser();

  agregarusuario(){
    this.router.navigate(['agregar'])
  }

}
