import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/user.service';
import { User } from '../shared/user.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }

  user: User;
  isLoading = false;
  ngOnInit() {

    const login = this.route.snapshot.params.userLogin;
    if (login) {
      this.isLoading = true;

      this.userService.getUserDetails(login).subscribe((user: User) => {
      this.user = user;
        this.isLoading = false;
        this.user.created_at = new DatePipe('en-US').transform(this.user.created_at, 'MM/dd/yyyy')

      });
    } else {
      this.router.navigate(['']);
    }
  }

  openUserRepositories() {
    this.router.navigate([`/user/${this.user.login}/repositories`]);
  }

}
