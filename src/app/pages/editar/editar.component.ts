import { Component, inject } from '@angular/core';
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
  user:usuario | null=null; 
  route=inject(ActivatedRoute)
  userService=inject(UserService)
  param=this.route.snapshot.paramMap.get("id");

  id:number|null=null;
  disable: boolean=true;

  constructor(){
    if(this.param) {
      this.id=+this.param
      this.user=this.userService.getuserbyid(this.id)
    }
  }
  



}
