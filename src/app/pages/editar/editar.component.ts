import { Component, computed, inject, signal } from '@angular/core';
import { UserService } from '../../services/UserService.service';
import { ActivatedRoute } from '@angular/router';
import { usuario } from '../../types';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar',
  imports: [FormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css',
})
export class EditarComponent {
  user=signal<usuario | null>(null); 
  route=inject(ActivatedRoute)
  userService=inject(UserService)
  param=this.route.snapshot.paramMap.get("id");

  id:number|null=null;
  disable=computed(()=>{
    this.user()?.age == null || this.user()?.firstname == '' || this.user()?.lastname == ''
  });

  constructor(){
    if(this.param) {
      this.id=+this.param
      this.user.set(this.userService.getuserbyid(this.id))
    }
  }
  



}
