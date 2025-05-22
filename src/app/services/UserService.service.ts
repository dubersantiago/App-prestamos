import { Injectable } from '@angular/core';
import { usuario } from '../types';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usuarios:usuario[] =[
    {
      id:1,
      firstname:"duber",
      lastname:"garcia",
      age:24,
      activo:true
    },
    {
      id:2,
      firstname:"juan",
      lastname:"perez",
      age:20,
      activo:false
    },
    {
      id:3,
      firstname:"maicon",
      lastname:"fernandez",
      age:30,
      activo:false
    },
  ];

  registerUser(firstname:string,lastname:string,age:number){
      const NewUser:usuario={
        id:this.usuarios.length,
        firstname:firstname,
        lastname:lastname,
        age:age,
        activo:true
      };
      this.usuarios.push(NewUser);
  }


  getUser():usuario[]{
    return [...this.usuarios]
  }

}
