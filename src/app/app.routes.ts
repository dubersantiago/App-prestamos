import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"usuarios",
        loadComponent:() => import('./pages/usuarios/usuarios.component').then((c)=>c.UsuariosComponent)
    },
    {
        path:"agregar",
        loadComponent:() => import('./pages/agregar/agregar.component').then((c)=>c.AgregarComponent)
    },
    {
        path:"contacto",
        loadComponent:()=> import('./pages/contacto/contacto.component').then((c)=>c.ContactoComponent)
    },
    {
        path:"Editar/:id",
        loadComponent:()=> import('./pages/editar/editar.component').then((c)=>c.EditarComponent)
    },
    {   
        path:'**',
        redirectTo:'usuarios'
    }
];
