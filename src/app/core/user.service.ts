import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../users/shared/user.model';
import { Pagination } from '../users/shared/pagination.model';
import { environment } from 'src/environments/environment.prod';
import { Repository } from '../users/shared/repository.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(since?: number) {
    return this.http.get<{ users: User[], next: Pagination }>(`${environment.apiAddress}/users`, 
    { params: since ? { since: since.toString() } : null });
  }

  getUserDetails(login: string) {
    return this.http.get<User>(`${environment.apiAddress}/users/${login}/details`, 
    { params: login ? { since: login.toString() } : null });
  }

  listUserRepos(login: string) {
    return this.http.get<Array<Repository>>(`${environment.apiAddress}/users/${login}/repos`);
  }
}
