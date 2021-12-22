import { Component} from '@angular/core'
import { faUsers } from '@fortawesome/free-solid-svg-icons'


@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.sass']
})

export class SidebarComponent {
    usersIcon = faUsers;
}
