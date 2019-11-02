import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './users/user-list/user-list.component';


const routes: Routes = [
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
    path: 'user/:userLogin',
    redirectTo: '/user-list',
    pathMatch: 'full'
  },
  {
    path: '**', 
    redirectTo: '/heroes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
