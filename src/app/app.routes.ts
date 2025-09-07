import { Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { Azienda } from './azienda/azienda';
import { Contatti } from './contatti/contatti';

export const routes: Routes = [{
        path: "",
        redirectTo: "/homepage",
        pathMatch: 'full'
    }, {
        path: "homepage",
        component: Homepage,
        title: "Homepage - DAS"
    }, {
        path: "azienda",
        component: Azienda,
        title: "L'azienda - DAS"
    }, {
        path: "contatti",
        component: Contatti,
        title: "Contatti - DAS"
    }
];
