import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../shared/user.model';
import { UserService } from 'src/app/core/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Repository } from '../shared/repository.model';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'user-repository-list',
  styleUrls: ['user-repository-list.component.scss'],
  templateUrl: 'user-repository-list.component.html',
})
export class UserRepositoryListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'url'];
  dataSource = new MatTableDataSource<Repository>();
  isLoading = true;
  size = 0;
  since = 0;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const login = this.route.snapshot.params.userLogin;
    if (login) {
      this.getRepositoryList(login);
    } else {
      this.router.navigate(['']);
    }
  }

  goToRepository(repository: Repository) {
    window.open(repository.html_url, "_blank");
  }

  private getRepositoryList(login : string) {
    this.isLoading = true;
    this.userService.listUserRepos(login).subscribe(data => {
      this.dataSource.data = data;
      this.isLoading = false;
    });
  }
}
