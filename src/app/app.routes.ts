import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: 'home',
    loadComponent: ()=> {
        return import('./home/home.component').then(m=> m.HomeComponent);
    },
},
{
    path: '',
    pathMatch: 'full',
    loadComponent: ()=> {
        return import('./landing-page/landing-page.component').then(m=> m.LandingPageComponent);
    },
    },
    {
    path: 'gallery',
    loadComponent: ()=> {
        return import('./components/img-gallery/img-gallery.component').then(m=> m.ImgGalleryComponent);
    },
    },
    {
    path: 'register',
    loadComponent: ()=> {
        return import('./components/form/form.component').then(m=> m.FormComponent);
    },
    },
    {
    path: 'login',
    loadComponent: ()=> {
        return import('./components/login-form/login-form.component').then(m=> m.LoginFormComponent);
    },
    },
    {
    path: 'axios',
    loadComponent: ()=> {
        return import('./components/axios-demo/axios-demo.component').then(m=> m.AxiosDemoComponent);
    },
    }
];
