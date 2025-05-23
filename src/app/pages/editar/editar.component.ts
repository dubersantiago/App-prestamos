import { Component, inject, signal } from '@angular/core';
import { UserService } from '../../services/UserService.service';
import { ActivatedRoute } from '@angular/router';
import { usuario } from '../../types';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css',
})
export class EditarComponent {
  user:usuario | null=null; 
  route=inject(ActivatedRoute)
  userService=inject(UserService)
  param=this.route.snapshot.paramMap.get("id");
  form!:FormGroup;
  firstnamecontrol=signal<boolean>(true)
  lastnamenamecontrol=signal<boolean>(true)
  agecontrol=signal<boolean>(true)
  id:number|null=null;
  disable=signal<boolean>(true);

  constructor(){
    if(this.param) {
      this.id=+this.param
      this.user=this.userService.getuserbyid(this.id)
      this.form=new FormGroup({
        firstname:new FormControl<string|null>(this.user!.firstname,[Validators.required,Validators.minLength(5)]),
        lastname:new FormControl<string|null>(this.user!.lastname,[Validators.required,Validators.minLength(5)]),
        age:new FormControl<number| null>(this.user!.age,[Validators.required,Validators.min(18)]),
        state:new FormControl<boolean | null>(this.user!.activo),
      })
      const initialValue=this.form.value;
      this.form.valueChanges.subscribe((value)=>{
      (JSON.stringify(value)!==JSON.stringify(initialValue) && value.firstname!=='' && value.lastname!=='' && value.age!==null && this.form.valid)? this.disable.set(false) : this.disable.set(true) 
      this.firstnamecontrol.set(this.form.controls?.['firstname'].valid)
      this.lastnamenamecontrol.set(this.form.controls?.['lastname'].valid)
      this.agecontrol.set(this.form.controls?.['age'].valid)
      })
    }
  }

  updateUser():void{
    console.log(this.form)
    const usuarioactualizado:usuario={
      id:this.id!,
      firstname:this.form.value.firstname,
      lastname:this.form.value.lastname,
      age:this.form.value.age,
      activo:this.form.value.state
    }
    this.userService.updateUser(usuarioactualizado)
  }

}
