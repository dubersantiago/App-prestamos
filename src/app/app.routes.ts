import { Routes } from '@angular/router';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
    {
        path:"usuarios",
        component:UsuariosComponent
    },
    {
        path:"contacto",
        component:ContactoComponent
    }
];
