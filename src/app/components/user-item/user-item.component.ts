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

    changeUserStatus(user: any) {
        let newStatusID = user.status == 2 ? 3 : 2;

        let userData = {
            userID: user.id,
            userStatus: newStatusID
        }

        let promptText = 'Вы действительно хотите заблокировать данного пользователя?';

        if (newStatusID == 2) {
            promptText = 'Вы действительно хотите разблокировать данного пользователя?';
        }

        if (confirm(promptText)) {
            this.userData.changeUserStatus(userData).subscribe((data) => {})
            return user.status = newStatusID;
        }

        return;
    }
}
