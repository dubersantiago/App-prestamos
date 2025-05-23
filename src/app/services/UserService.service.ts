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
      activo:true,
      loan:[
        {
          id:1,
          amount:2000000,
          interesRate:0.2,
          term:6,
          startDate: new Date("2023-02-01"),
          endDate:new Date("2023-08-01"),
          status:'aprovado'
        },
        {
          id:2,
          amount:5000000,
          interesRate:0.7,
          term:8,
          startDate: new Date("2023-09-01"),
          endDate:new Date("2024-03-06"),
          status:'aprovado'
        }
      ]
    },
    {
      id:2,
      firstname:"juan",
      lastname:"perez",
      age:20,
      activo:true,
      loan:[
        {
          id:1,
          amount:9000000,
          interesRate:0.56,
          term:6,
          startDate: new Date("2023-02-01"),
          endDate:new Date("2023-08-01"),
          status:'rechazado'
        },
        {
          id:2,
          amount:15000000,
          interesRate:0.7,
          term:8,
          startDate: new Date("2023-09-01"),
          endDate:new Date("2024-03-06"),
          status:'aprovado'
        },
        {
          id:3,
          amount:45000000,
          interesRate:0.7,
          term:8,
          startDate: new Date("2023-09-01"),
          endDate:new Date("2024-03-06"),
          status:'pagado'
        }
      ]
    },
    {
      id:3,
      firstname:"maicon",
      lastname:"fernandez",
      age:30,
      activo:false
    },
  ];

  registerUser(firstname:string,lastname:string,age:number,status:boolean):void{
      const NewUser:usuario={
        id:this.usuarios.length+1,
        firstname:firstname,
        lastname:lastname,
        age:age,
        activo:status
      };
      this.usuarios.push(NewUser);
  }

  updateUser(usuario:usuario):void{
    const index=this.usuarios.findIndex((u)=>u.id===usuario.id)
    if(index!==-1) this.usuarios[index]=usuario
  }

  getUser():usuario[]{
    return [...this.usuarios]
  }

  getuserbyid(id:number):usuario| null{
    const user=this.usuarios.find((u)=>u.id==id) || null
    if(user===null) return null
    return { ...user }
  }

}
