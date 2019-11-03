import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserComponent } from './users/user/user.component';
import { UserRepositoryListComponent } from './users/user-repositories/user-repository-list.component';


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
    component: UserComponent,
    data: { title: 'User List' }
  },
  {
    path: 'user/:userLogin/repositories',
    component: UserRepositoryListComponent,
    data: { title: 'User Repository List' }
  },
  {
    path: '**', 
    redirectTo: '/user-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
