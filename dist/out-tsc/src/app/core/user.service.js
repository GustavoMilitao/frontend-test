import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    getUsers(since) {
        return this.http.get(`${environment.apiAddress}/users`, { params: since ? { since: since.toString() } : null });
    }
};
UserService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map