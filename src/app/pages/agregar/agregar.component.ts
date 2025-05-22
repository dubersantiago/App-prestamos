import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/UserService.service';

@Component({
  selector: 'app-agregar',
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent {
  userservice=inject(UserService)
  form!:FormGroup;

  ngOnInit(){
    this.form=new FormGroup({
      firstname:new FormControl<string|null>(null,[Validators.required,Validators.minLength(5)]),
      lastname:new FormControl<string|null>(null,[Validators.required,Validators.minLength(5)]),
      age:new FormControl<number| null>(0,[Validators.required,Validators.min(18)]),
      state:new FormControl<boolean | null>(false),
    })
  }

  submit():void {
    const {firstname,lastname,age,state} = this.form.value;
    this.userservice.registerUser(firstname,lastname,age,state);
    this.form.reset();
  }

}
