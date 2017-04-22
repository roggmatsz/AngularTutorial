import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';

const routes: Routes = [
    {
        path: 'heroes',
        component: HeroesComponent
    }, {
        path: 'dashboard',
        component: DashboardComponent
    }, {
        path: 'detail/:id',
        component: HeroDetailComponent
    }, {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
]
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
