import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../shared/user.model';
import { UserService } from 'src/app/core/user.service';
import { Router } from '@angular/router';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'user-list',
  styleUrls: ['user-list.component.scss'],
  templateUrl: 'user-list.component.html',
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'login'];
  dataSource = new MatTableDataSource<User>();
  isLoading = true;
  size = 0;
  since = 0;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.getUserList(this.since);
  }

  

  private getUserList(since : number) {
    this.isLoading = true;
    this.userService.getUsers(since).subscribe(data => {
      this.dataSource.data = data.users;
      this.size = parseInt(data.next.since);
      this.isLoading = false;
    });
  }

  setPage(event) {
    this.since = event.pageSize * event.pageIndex;
    this.dataSource.data = [];
    this.getUserList(this.since);
  }

  loadUser(user: User) {
    this.router.navigate([`/user/${user.login}`])
  }
}
