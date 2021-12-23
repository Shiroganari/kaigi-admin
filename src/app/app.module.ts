import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { Routes, RouterModule } from '@angular/router'
import { HttpClientModule } from  '@angular/common/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UsersComponent } from './components/users/users.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
    {path: 'users', component: UsersComponent},
    {path: '', component: HomeComponent}
]

@NgModule({
    declarations: [
        AppComponent,
        SidebarComponent,
        UsersComponent,
        UserItemComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        FontAwesomeModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
