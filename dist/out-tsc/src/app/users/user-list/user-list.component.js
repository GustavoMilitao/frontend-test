import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
/**
 * @title Table with pagination
 */
let UserListComponent = class UserListComponent {
    constructor(userService) {
        this.userService = userService;
        this.displayedColumns = ['id', 'login'];
        this.dataSource = new MatTableDataSource();
        this.isLoading = true;
    }
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.getUserList(null);
    }
    getUserList(since) {
        // this.isLoading = true;
        this.userService.getUsers(since).subscribe(data => {
            this.dataSource.data = data.users;
            this.isLoading = false;
        });
    }
    setPage(event) {
        this.getUserList(event.pageSize * event.pageIndex);
    }
};
tslib_1.__decorate([
    ViewChild(MatPaginator, { static: false })
], UserListComponent.prototype, "paginator", void 0);
UserListComponent = tslib_1.__decorate([
    Component({
        selector: 'user-list',
        styleUrls: ['user-list.component.scss'],
        templateUrl: 'user-list.component.html',
    })
], UserListComponent);
export { UserListComponent };
//# sourceMappingURL=user-list.component.js.map