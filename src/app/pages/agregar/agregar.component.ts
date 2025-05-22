import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  imports: [FormsModule],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent {
  fisrtname: string='';
  lastname: string='';
  age: number=0;


  registerUser() {
    throw new Error('Method not implemented.');
  }

}
