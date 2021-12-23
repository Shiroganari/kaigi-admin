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

    constructor(private userData:UsersDataService) {
        this.userData.getUsers().subscribe((data) => {
            this.users = data;
        })
    }
}
