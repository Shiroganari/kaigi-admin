import { Component } from '@angular/core';
import { UsersDataService } from '../../services/users-data.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.sass'],
    providers: [UsersDataService]
})

export class UsersComponent {
    users: any;
    isUsersExist!: boolean;

    constructor(private userData:UsersDataService) {
        this.getUsers();
    }

    getUsers(value?: string): void {
        this.userData.getUsers(value).subscribe((data) => {
            this.users = data;

            if (Object.keys(data).length === 0) {
                this.isUsersExist = false;
                return;
            }

            this.isUsersExist = true;
        })
    }
}
