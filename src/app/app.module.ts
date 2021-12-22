import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UsersComponent } from './users/users.component';
import { EventsComponent } from './events/events.component';

const appRoutes: Routes = [
    {path: 'users', component: UsersComponent}
]

@NgModule({
    declarations: [
        AppComponent,
        SidebarComponent,
        EventsComponent
    ],
    imports: [
        BrowserModule,
        FontAwesomeModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
