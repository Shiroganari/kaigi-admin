import { Component } from '@angular/core';
import { UsersDataService } from '../../services/users-data.service';

@Component({
    selector: 'app-user-item',
    templateUrl: './user-item.component.html',
    styleUrls: ['./user-item.component.sass'],
    providers: [UsersDataService]
})

export class UserItemComponent {
    users: any;

    constructor(private userData:UsersDataService) {
        this.userData.getUsers().subscribe((data) => {
            this.users = data;
        })
    }

    blockUser(userID: number) {
        let userData = {
            userID: userID
        }

        this.userData.blockUser(userData).subscribe((data) => {
            console.log(data);
        })
    }
}
