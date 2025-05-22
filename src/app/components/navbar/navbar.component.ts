import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  titulo:string='PrestaYa';
  links:{name:string,path:string}[]=[
    {name:'usuarios',path:'usuarios'},
    {name:'contacto',path:'contacto'},
  ]
}
