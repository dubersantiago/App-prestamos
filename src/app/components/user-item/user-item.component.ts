import { Component, inject, Input, input, signal } from '@angular/core';
import { usuario } from '../../types';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-item',
  imports: [CommonModule],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css'
})
export class UserItemComponent {
  router=inject(Router)
  usuario=input.required<usuario>();

  changeStatus(user:usuario){
    user.activo=!user.activo;
  }

  editar(id:number){
    this.router.navigate(['Editar',id]);
  }
}
