import { Component, Input, input } from '@angular/core';
import { usuario } from '../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-item',
  imports: [CommonModule],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css'
})
export class UserItemComponent {
  @Input() usuario!:usuario;

  

  changeStatus(user:usuario){
    user.activo=!user.activo;
  }
}
