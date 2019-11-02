import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './users/user-list/user-list.component';
const routes = [
    {
        path: '',
        redirectTo: '/user-list',
        pathMatch: 'full'
    },
    {
        path: 'user-list',
        component: UserListComponent,
        data: { title: 'User List' }
    },
    {
        path: '',
        redirectTo: '/user-list',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/heroes',
        pathMatch: 'full'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map