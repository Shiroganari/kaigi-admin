import { Component, Input } from '@angular/core';
import { UsersDataService } from '../../services/users-data.service';

@Component({
    selector: 'app-user-item',
    templateUrl: './user-item.component.html',
    styleUrls: ['./user-item.component.sass'],
    providers: [UsersDataService]
})

export class UserItemComponent {
    @Input() users: any;

    constructor(private userData: UsersDataService) {}

    blockUser(userID: number) {
        let userData = {
            userID: userID
        }

        if (confirm('Вы действительно хотите заблокировать данного пользователя?')) {
            this.userData.blockUser(userData).subscribe((data) => {
            })
        }
    }
}
